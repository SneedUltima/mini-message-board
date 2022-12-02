const express = require("express");
const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.use("/styles", express.static(__dirname + "/styles"));

app.use("/", require("./routes/messageRoutes"));

app.use("/new", require("./routes/messageRoutes"));

app.use((req, res) => {
  res.status(404).render("404");
});
