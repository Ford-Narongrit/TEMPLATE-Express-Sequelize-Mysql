const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./models");
const routes = require("./routes");

// TZ
process.env.TZ = "Asia/Bangkok";

// DB
db.sequelize.sync();

// INITIAL SETTING
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTE
routes(app);
