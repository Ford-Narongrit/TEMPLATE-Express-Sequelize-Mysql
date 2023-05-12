const fs = require("fs");
const dotenv = require("dotenv").config();

module.exports = {
  //node
  node_env: process.env.NODE_ENV,

  //dev_db
  dev_db_username: process.env.DEV_DB_USERNAME,
  dev_db_password: process.env.DEV_DB_PASSWORD,
  dev_db_database: process.env.DEV_DB_DATABASE,
  dev_db_host: process.env.DEV_DB_HOST,
  dev_db_port: process.env.DEV_DB_PORT,
  dev_db_dialect: process.env.DEV_DB_DIALECT,

  //test_db
  test_db_username: process.env.TEST_DB_USERNAME,
  test_db_password: process.env.TEST_DB_PASSWORD,
  test_db_database: process.env.TEST_DB_DATABASE,
  test_db_host: process.env.TEST_DB_HOST,
  test_db_port: process.env.TEST_DB_PORT,
  test_db_dialect: process.env.TEST_DB_DIALECT,

  //production
  prod_host: process.env.DB_HOST,
  prod_port: process.env.DB_PORT,
  prod_username: process.env.DB_USERNAME,
  prod_password: process.env.DB_PASSWORD,
  prod_database: process.env.DB_DATABASE,
  prod_dialect: process.env.DB_DIALECT,
};
