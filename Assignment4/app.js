const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("views engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

const users = [];

app.get("/", (req, res, next) => {
  res.render("add-user.pug", { title: "Add-user" });
});

app.get("/users", (req, res, next) => {
  res.render("users.pug", { title: "Users", u1: users });
});

app.post("/add-user", (req, res, next) => {
  users.push({ title: req.body.title });
  res.redirect("/users");
});

app.use((req, res, next) => {
  res.status(404).render("404.pug", { title: "Page Not Found" });
});

app.listen(3000);
