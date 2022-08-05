const express = require("express");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = app;
