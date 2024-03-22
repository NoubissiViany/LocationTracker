const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const db = require("../db/db.js");
const userMiddleware = require("../middleware/users.js");
router.post("/sign-up", userMiddleware.validateRegister, (req, res, next) => {
  db.query(
    "SELECT id FROM users WHERE LOWER(email) = LOWER(?)",
    [req.body.email],
    (err, result) => {
      if (result && result.length) {
        // error
        return res.status(409).send({
          message: "This email is already in use!",
        });
      } else {
        // email not in use
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              message: err,
            });
          } else {
            db.query(
              "INSERT INTO users (id, username, email, password, registered) VALUES (?, ?, ?, ?, now());",
              [uuid.v4(), req.body.username, req.body.email, hash],
              (err, result) => {
                if (err) {
                  return res.status(400).send({
                    message: err,
                  });
                }
                return res.status(201).send({
                  message: "Registered!",
                });
              }
            );
          }
        });
      }
    }
  );
});
router.post("/login", (req, res, next) => {
  db.query(
    `SELECT * FROM users WHERE email = ?;`,
    [req.body.email],
    (err, result) => {
      if (err) {
        return res.status(400).send({
          message: err,
        });
      }
      if (!result.length) {
        return res.status(400).send({
          message: "Email or password incorrect!",
        });
      }
      bcrypt.compare(
        req.body.password,
        result[0]["password"],
        (bErr, bResult) => {
          if (bErr) {
            return res.status(400).send({
              message: "Email or password incorrect!",
            });
          }
          if (bResult) {
            // password match
            const token = jwt.sign(
              {
                username: result[0].username,
                userId: result[0].id,
              },
              "SECRETKEY",
              { expiresIn: "7d" }
            );
            db.query(`UPDATE users SET last_login = now() WHERE id = ?;`, [
              result[0].id,
            ]);
            return res.status(200).send({
              message: "Logged in!",
              token,
              user: result[0],
            });
          }
          return res.status(400).send({
            message: "Email or password incorrect!",
          });
        }
      );
    }
  );
});
router.get("/user/:id", (req, res, next) => {
  const userId = req.params.id;

  db.query(`SELECT * FROM users WHERE id = ?;`, [userId], (err, result) => {
    if (err) {
      return res.status(400).send({
        message: err,
      });
    }
    if (!result.length) {
      return res.status(404).send({
        message: "User not found!",
      });
    }
    return res.status(200).send({
      user: result[0],
    });
  });
});
router.put("/user/:id", (req, res, next) => {
  const userId = req.params.id;
  const updatedUser = req.body; // Assuming the updated user details are sent in the request body

  // Generate a bcrypt hash of the updated password
  bcrypt.hash(updatedUser.password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).send({
        message: "Error encrypting password!",
      });
    }

    // Update the updatedUser object with the hashed password
    updatedUser.password = hashedPassword;

    db.query(
      `UPDATE users SET ? WHERE id = ?;`,
      [updatedUser, userId],
      (err, result) => {
        if (err) {
          return res.status(400).send({
            message: err,
          });
        }

        if (result.affectedRows === 0) {
          return res.status(404).send({
            message: "User not found!",
          });
        }

        return res.status(200).send({
          message: "User updated successfully!",
        });
      }
    );
  });
});
router.post("/create-post-location", (req, res, next) => {
  const { lat, lng, userId } = req.body;

  // Save the latitude and longitude information to the database
  db.query(
    "INSERT INTO post_locations (id, user_id, latitude, longitude, date) VALUES (?, ?, ?, ?, now())",
    [uuid.v4(), userId, lat, lng],
    (err, result) => {
      if (err) {
        return res.status(500).send({
          message: err,
        });
      }
      return res.status(201).send({
        message: "Post location created!",
      });
    }
  );
});
router.get("/get-locations/:id", (req, res, next) => {
  const userId = req.params.id;

  // Retrieve all locations for the specified user ID from the database
  db.query(
    "SELECT * FROM post_locations WHERE user_id = ?",
    [userId],
    (err, results) => {
      if (err) {
        return res.status(500).send({
          message: err,
        });
      }
      return res.status(200).send({
        locations: results,
      });
    }
  );
});
module.exports = router;
