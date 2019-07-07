var express = require("express");

var router = express.Router();

var iceCream = require("../models/icecream.js");

router.get("/", function(req, res) {
  iceCream.selectAll(function(data) {
    var hbsObject = {
      iceCreams: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/icecreams", function(req, res) {
  var iceCreamName = req.body.name;

  var cb = function(result) {
    // Send back the ID of the new item
    res.json({ id: result.insertId });
  };

  iceCream.insertOne(iceCreamName, cb);
});

router.put("/api/icecreams/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  var objColVals = {
    devoured: req.body.devoured
  };

  var cb = function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  };

  iceCream.updateOne(objColVals, condition, cb);
});

router.delete("/api/icecreams/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  iceCream.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
