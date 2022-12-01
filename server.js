const express = require("express");
const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use((req, res) => {
  res.status(404).render("404");
});
