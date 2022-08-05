require("dotenv").config();

module.exports = dbConfig = {
  PG_URI: process.env.PG_URI,
  MGDB_URI: process.env.MGDB_URI,
};
