var express = require("express");
var router = express.Router();
module.exports = router;
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/falied", function (req, res, next) {
  req.flash("age", 12);
  res.send("created");
});
router.get("/flashChecking", function (req, res, next) {
  console.log(req.flash("age"));
  res.send("check ");
});
