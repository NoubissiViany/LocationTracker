const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    throw new Error('Failed to connect to the database: ' + err.message);
  }
});

module.exports = connection;