var express = require("express");
var router = express.Router();
module.exports = router;
const userModel = require("./users");
const localStrategy = require("passport-local");
const passport = require("passport");
passport.use(new localStrategy(userModel.authenticate()));

/* GET all user data */
router.get("/", async function (req, res, next) {
  res.render("index");
});
router.get("/profile", isLoggedIn, function (req, res, next) {
  res.render("profile");
});
router.post("/register", function (req, res) {
  var userData = new userModel({
    username: req.body.username,
    secret: req.body.secret,
    // password:req.body.password
  });
  userModel
    .register(userData, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    });
});
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
  }),
  function (req, res) {}
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
