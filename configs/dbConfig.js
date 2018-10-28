const mysql = require("mysql");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "<my_password>",
  database: "pokemon_db"
});

module.exports = pool;
