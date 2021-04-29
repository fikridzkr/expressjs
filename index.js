const express = require("express");
const app = express();
const port = 3000;

// app.use("/", (req, res) => {
//   res.send("test");
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({
    name: "Fikri",
    email: "fikri@gmail.com",
    noHP: "0812332323",
  });
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/products/:id", (req, res) => {
  res.send(`Products ID ${req.params.id} \n Category ${req.query.category}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
