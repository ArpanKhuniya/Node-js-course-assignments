const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("H1");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("H2");
// });

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome to Express JS by Arpan</h1>");
});

app.use("/users", (req, res, next) => {
  res.send("<ul><li>User1</li><li>User2</li></ul>");
});

app.listen(3000);
