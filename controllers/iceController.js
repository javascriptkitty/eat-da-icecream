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
  iceCream.create(["name"], [req.body.name], function(result) {
    // Send back the ID of the new item
    res.json({ id: result.insertId });
  });
});

router.put("/api/icecreams/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  iceCream.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
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
