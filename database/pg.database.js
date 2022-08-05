const { Pool, Client } = require("pg");
const { PG_URI } = require("../config/database.config");

const client = new Client({ connectionString: PG_URI, ssl: false });

const connect = async () => {
  await client.connect((err) => {
    if (err) console.log("err");
    console.log("connected");
  });
};

module.exports = {
  connect,
  query: (text, params) => client.query(text, params),
};
