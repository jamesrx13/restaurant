const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/src"));

app.get("/", (req, res) => {
  res.send(__dirname + "/src");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
