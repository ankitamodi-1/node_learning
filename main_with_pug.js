const express = require("express");
const app = express();
const PORT = 3000;
app.set("view engine", "pug"); //there must be views folder

//console.log(path)
console.log(__dirname)
app.get("/", (req, res) => {
  res.render("index", { name: "sarthak" });
});
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });