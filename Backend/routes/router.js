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
module.exports = router;
