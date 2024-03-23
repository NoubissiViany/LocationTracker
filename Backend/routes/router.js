const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const db = require("../db/db.js");
const userMiddleware = require("../middleware/users.js");
const currentDateTime = new Date().toISOString();

// Helper function for handling database errors
const handleDbError = (res, err) => {
  return res.status(500).send({
    message: err,
  });
};

router.post("/sign-up", userMiddleware.validateRegister, (req, res, next) => {
  const { email, username, password } = req.body;

  db.query(
    "SELECT id FROM users WHERE LOWER(email) = LOWER(?)",
    [email],
    (err, result) => {
      if (err) {
        return handleDbError(res, err);
      }

      if (result.length > 0) {
        return res.status(409).send({
          message: "This email is already in use!",
        });
      }

      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return handleDbError(res, err);
        }

        const userId = uuid.v4();

        const sql =
          "INSERT INTO users (id, username, email, password, registered) VALUES (?, ?, ?, ?, ?)";
        const values = [userId, username, email, hash, currentDateTime];

        db.query(sql, values, (err, result) => {
          if (err) {
            return handleDbError(res, err);
          }

          return res.status(201).send({
            message: "Registered!",
          });
        });
      });
    }
  );
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        return handleDbError(res, err);
      }

      if (!result.length) {
        return res.status(400).send({
          message: "Email or password incorrect!",
        });
      }

      bcrypt.compare(password, result[0].password, (bErr, bResult) => {
        if (bErr) {
          return handleDbError(res, bErr);
        }

        if (bResult) {
          const token = jwt.sign(
            {
              username: result[0].username,
              userId: result[0].id,
            },
            "SECRETKEY",
            { expiresIn: "7d" }
          );

          db.query(
            "UPDATE users SET last_login = ? WHERE id = ?",
            [currentDateTime, result[0].id],
            (err) => {
              if (err) {
                console.error("Error updating last login:", err);
              }
            }
          );

          return res.status(200).send({
            message: "Logged in!",
            token,
            user: result[0],
          });
        }

        return res.status(400).send({
          message: "Email or password incorrect!",
        });
      });
    }
  );
});

router.get("/user/:id", (req, res, next) => {
  const userId = req.params.id;

  db.query("SELECT * FROM users WHERE id = ?", [userId], (err, result) => {
    if (err) {
      return handleDbError(res, err);
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

  bcrypt.hash(updatedUser.password, 10, (err, hashedPassword) => {
    if (err) {
      return handleDbError(res, err);
    }

    updatedUser.password = hashedPassword;

    db.query(
      "UPDATE users SET ? WHERE id = ?",
      [updatedUser, userId],
      (err, result) => {
        if (err) {
          return handleDbError(res, err);
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

  db.query(
    "INSERT INTO post_locations (id, user_id, latitude,longitude, date) VALUES (?, ?, ?, ?, ?)",
    [uuid.v4(), userId, lat, lng, currentDateTime],
    (err, result) => {
      if (err) {
        return handleDbError(res, err);
      }

      return res.status(201).send({
        message: "Post location created!",
      });
    }
  );
});

router.get("/get-locations/:id", (req, res, next) => {
  const userId = req.params.id;

  db.query(
    "SELECT * FROM post_locations WHERE user_id = ?",
    [userId],
    (err, results) => {
      if (err) {
        return handleDbError(res, err);
      }

      return res.status(200).send({
        locations: results,
      });
    }
  );
});

module.exports = router;