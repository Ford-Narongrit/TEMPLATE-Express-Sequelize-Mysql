"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const post = process.env.APP_PORT || "8000";

module.exports = function (app) {
  app.listen(post, () => {
    console.log(`Server running on port ${post}.`);
  });

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    console.log(file.split('.js'));
    require(path.join(__dirname, file))(app);
  });
};
