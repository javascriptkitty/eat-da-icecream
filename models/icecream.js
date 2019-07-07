var orm = require("../config/orm.js");

var iceCream = {
  selectAll: function(cb) {
    orm.selectAll("ice_creams", function(res) {
      cb(res);
    });
  },
  insertOne: function(iceCreamName, cb) {
    orm.insertOne("ice_creams", ["name"], [iceCreamName], cb);
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("ice_creams", objColVals, condition, cb);
  },
  delete: function(condition, cb) {
    orm.delete("ice_creams", [condition], cb);
  }
};

module.exports = iceCream;
