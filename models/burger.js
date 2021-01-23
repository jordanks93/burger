// Import ORM with functions that make it easier to interact with db
var orm = require('../config/orm.js');

// Burger object with functions to interact with burgers db
var burger = {

  // Select all burgers in the db
  selectAll: function(cb) {
    orm.selectAll('burgers', (res) => {
      cb(res);
    });
  },

  // Add a burger to the table
  addOne: function(cols, vals, cb) {
    orm.addOne('burgers', cols, vals, (res) => {
      cb(res);
    });
  },

  // Update a burger in the table, used to update devoured state
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, (res) => {
      cb(res);
    });
  }
};

module.exports = burger;