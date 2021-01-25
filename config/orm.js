// Import connection to mysql server
var connection = require ('../config/connection.js');

// Helper functions for passing values into mysql query
// creates an array of question marks depending on how many value you need to pass
function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
	var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
	return arr.toString();
}

// ORM object for mysql queries
var orm = {

	// Returns all table entries
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, (err, result) => {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// Adds a single table entry
	addOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, (err, result) => {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// Updates a single table entry
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, (err, result) => {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;