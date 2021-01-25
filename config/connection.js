// LOAD mysql
var mysql = require("mysql");
var connection;

if (process.env.JAWSBD_URL) {
  // heroku connection object
  connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
  // mysql database connection object
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Airforce22@!",
    database: "burgers_db"
  });
};

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }

  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;