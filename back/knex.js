const config = require("./knexfile");

const isProd = process.env.NODE_ENV === "production";
console.log(process.env.NODE_ENV);
const knex = require("knex")(isProd ? config.production : config.development);
module.exports = knex;
