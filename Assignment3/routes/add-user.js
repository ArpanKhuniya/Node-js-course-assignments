const express = require("express");

const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-user", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-user.html"));
});

router.post("/add-user", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
