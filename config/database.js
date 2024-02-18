require("dotenv").config();

const DB_HOST = process.env.DATABASE_HOST;
const DB_USER = process.env.DATABASE_USER;
const DB_PASSWORD = process.env.DATABASE_PASSWORD;
const DB_PORT = process.env.DATABASE_PORT;
const DB_NAME = process.env.DATABASE_NAME;

const Knex_DB = require("knex")({
  client: "postgresql",
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME,
  },
  pool: { min: 0, max: 10 },
});

module.exports = { Knex_DB };
