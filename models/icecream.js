var orm = require("../config/orm.js");

var iceCream = {
  selectAll: function(cb) {
    orm.selectAll("ice_creams", function(res) {
      cb(res);
    });
  },
  insertOne: function(cb) {},
  updateOne: function(cb) {}
};

module.exports = iceCream;
