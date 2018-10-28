const mysql = require("mysql");
const pool = mysql.createPool({
  host: "pokemondb.cgwrqfdgtwog.eu-west-2.rds.amazonaws.com",
  user: "root",
  password: "<my_password>",
  database: "pokemonDB"
});

module.exports = pool;
