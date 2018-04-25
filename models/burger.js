// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createOne: function(cols, vals, cb) {
    orm.createOne("burgers", "burger_name", cols, val, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, conditionVal, cb) {
    orm.updateOne("burgers", "devoured", objColVal, conditionVal, function(res) {
      cb(res);
    });
  },
  delete: function(conditionVal, cb) {
    orm.delete("burgers", "id", conditionVal, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
