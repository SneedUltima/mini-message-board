const express = require("express");
const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/styles", express.static(__dirname + "/styles"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.use((req, res) => {
  res.status(404).render("404");
});
