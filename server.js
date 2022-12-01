const express = require("express");
const port = 3000;

const app = express();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).res.sendFile("./views/404.html", { root: __dirname });
});
