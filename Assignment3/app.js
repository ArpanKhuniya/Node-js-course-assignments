const express = require("express");
const path = require("path");

const app = express();

const adminrouter = require("./routes/main");
const userrouter = require("./routes/user");
const adduserrouter = require("./routes/add-user");

app.use(express.static(path.join(__dirname, "public")));

app.use(userrouter);

app.use(adduserrouter);

app.use(adminrouter);

app.listen(3000);
