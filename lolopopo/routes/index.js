var express = require("express");
var router = express.Router();
module.exports = router;
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
// creating
router.get("/create", async function (req, res, next) {
  const createdUser = await userModel.create({
    username: "meao@ok",
    name: "meao)meao",
    age: 19,
  });
  res.send(createdUser);
});
// reading
router.get("/allUser", async function (req, res, next) {
  let allUser = await userModel.find();
  res.send(allUser);
});

// reading by id
router.get("/oneUser", async function (req, res, next) {
  let allUser = await userModel.findOne({ _id: "65604764ca81b0def2b073c7" });
  res.send(allUser);
});
// delete by id
router.get("/deleteUser", async function (req, res, next) {
  let deleteUser = await userModel.findOneAndDelete({
    _id: "65604764ca81b0def2b073c7",
  });
  res.send("success");
});
/* session starting */
router.get("/sessionStart", function (req, res, next) {
  req.session.meao = true;
  res.send("session started :)");
});
// session checking
router.get("/sessionChecking", function (req, res, next) {
  if (req.session.meao === true) {
    res.send("you are banned");
  } else {
    res.send("you are not banned");
  }
});
// session delete
router.get("/deleteSesssion", async function (req, res, next) {
  req.session.destroy((err) => {
    console.log(err);
  });
  res.send("session deleted");
});

// front end cookie
router.get("/frontEndCookie", function (req, res, next) {
  res.cookie("age", 12);
  res.render("index");
});
// read front end cookie
router.get("/readFrontEndCookie", function (req, res, next) {
  // console.log(req.cookies);
  console.log(req.cookies.age);
  res.send("index");
});
// delete front end cookie
router.get("/deleteFrontEndCookie", function (req, res, next) {
  res.clearCookie("age");
  // console.log(req.cookies.age);
  res.send("clear ho gya");
});
