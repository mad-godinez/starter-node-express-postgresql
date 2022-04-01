// Define the database configuration object
const env = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[env];


// Initialize a Knex instance by passing `config` as an argument to the Knex module
const knex = require("knex")(config);

module.exports = knex;