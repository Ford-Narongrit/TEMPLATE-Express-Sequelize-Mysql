const config = require("./config.js");

module.exports = {
  development: {
    username: config.dev_db_username,
    password: config.dev_db_password,
    database: config.dev_db_database,
    host: config.dev_db_host,
    port: config.dev_db_port,
    dialect: config.dev_db_dialect,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: config.test_db_username,
    password: config.test_db_password,
    database: config.test_db_database,
    host: config.test_db_host,
    port: config.test_db_port,
    dialect: config.test_db_dialect,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: config.prod_username,
    password: config.prod_password,
    database: config.prod_database,
    host: config.prod_host,
    port: config.prod_port,
    dialect: config.prod_dialect,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};

