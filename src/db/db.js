const knex = require("knex");

require("dotenv").config();

module.exports = knex({
  client: "postgres",
  connection: {
    host: process.env.HOST,
    user: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.DATABASE,
  },
});
