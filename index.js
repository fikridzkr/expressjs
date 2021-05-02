const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.get("/", (req, res) => {
  const siswa = [
    {
      nama: "Fikri",
      email: "fik@gmail.com",
    },
    {
      nama: "Ronaldo",
      email: "cr7@gmail.com",
    },
    {
      nama: "Messi",
      email: "m10@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Fikri Dzakir",
    title: "Halaman Index",
    siswa,
    title: "Home Page",
    layout: "layouts/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Page",
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page", layout: "layouts/main-layout" });
});

app.get("/products/:id", (req, res) => {
  res.send(`Products ID ${req.params.id} \n Category ${req.query.category}`);
});

app.get("/api", (req, res) => {
  res.json({
    name: "Fikri",
    email: "fikri@gmail.com",
    noHP: "0812332323",
  });
});
app.use("/", (req, res) => {
  res.status(404);
  res.send("404");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
