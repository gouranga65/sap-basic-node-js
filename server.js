const express = require("express");
const FS = require("fs");
const app = express();
app.use(express.static("webapp"));
// const fs = FS();

app.get("/", function (req, res) {
  res.send("Hello sundar");
});
// app.get("/user", function (req, res) {
//   var contentFile = FS.readFileSync("./webapp/emp.json", "utf-8");
//   res.send(contentFile);
// });
app.listen(process.env.PORT || 3000);
