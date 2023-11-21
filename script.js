const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./"));
app.get("/", function (req, res) {
  res.render("index", { $: 8 });
});
app.get("/contact", function (req, res) {
  res.render("contact");
});
app.get("/error", function (req, res, next) {
  throw new Error("wrong");
});
app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(3000);
