var express = require("express");
var router = express.Router();
module.exports = router;
const userModel = require("./users");

/* GET all user data */
router.get("/", async function (req, res, next) {
  let getAll = await userModel.find();
  res.send(getAll);
});
// creating users data
router.get("/created", async function (req, res) {
  let userData = await userModel.create({
    username: "sundar01",
    name: "sundar",
    description: "Lorem ipsum dolor sit amet",
    categories: ["ai", "ml", "java"],
  });
  res.send(userData);
});
// case sensetive search
router.get("/findUser", async function (req, res) {
  // below code means which contains "o" in user names
  // let regex = new RegExp("o", "i");
  // below code exact matching "^" mean starting "$" mean ending
  let regex = new RegExp("^Sundar01$", "i");
  let user = await userModel.find({ username: regex });
  res.send(user);
});
// find by categories
router.get("/findCategories", async function (req, res) {
  let categoriesValues = await userModel.find({
    categories: { $all: ["ruby"] },
  });
  res.send(categoriesValues);
});
// searching on a sepcific date range
router.get("/date", async function (req, res) {
  let startDate = new Date("2023-11-26");
  let endDate = new Date("2023-11-27");
  let userBydate = await userModel.find({
    datecreated: { $gte: startDate, $lte: endDate },
  });
  res.send(userBydate);
});
// exist any field or not
router.get("/exist", async function (req, res) {
  let existFields = await userModel.find({ surname: { $exists: true } });
  res.send(existFields);
});
// find document in specific field length
router.get("/okok", async function (req, res) {
  let existFields = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{  $strLenCP: "$name" }, 0] },
        { $lte: [{  $strLenCP: "$name" }, 4] },
      ],
    },
  });
  res.send(existFields);
});
