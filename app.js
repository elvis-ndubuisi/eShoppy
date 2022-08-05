const express = require("express");
const helmet = require("helmet");
const httpErr = require("http-errors");
require("dotenv").config();

const app = express();

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("*", (req, res, next) => {
  next(httpErr.NotFound("this route doesn't exist"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

module.exports = app;
