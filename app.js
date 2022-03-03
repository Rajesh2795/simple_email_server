const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "./config/.env"), debug: true});
const express = require("express");
const bodyParser = require('body-parser');
require("./src/db/mongoose");

const routes = require("./src/routes/routes");

const app = express();

// Parse incoming body requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load router
app.use("/", routes);

module.exports = app;




