var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Expre" });
});
router.get("/allUser", async function (req, res, next) {
  let user = await userModel.findOne({ _id: "6571dac025438861a783b52c" }).populate("posts");
  res.send(user);
});
router.get("/createUser", async function (req, res, next) {
  let createdUser = await userModel.create({
    username: "kumar",
    password: "p5kpl",
    posts: [],
    email: "kumar@",
    fullName: "sundar mahato",
  });
  res.send(createdUser);
});
router.get("/createPost", async function (req, res, next) {
  let createdPost = await postModel.create({
    postText: "birthday boy ",
    user: "6571dac025438861a783b52c",
  });
  let meao = await userModel.findOne({ _id: "6571dac025438861a783b52c" });
  meao.posts.push(createdPost._id);
  await meao.save();
  res.send("done");
});

module.exports = router;
