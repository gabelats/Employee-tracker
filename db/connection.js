const mySql = require("mysql2");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "Slight12!",
  database: "employee_db",
});

module.exports = connection;
