/*
* Generates a Sequelize instance from a configuration. See
* https://github.com/sequelize/sequelize for more information.
* Usage:
* var config = {
*  "host": "YOUR_DB_HOST",
*  "database": "YOUR_DB_NAME",
*  "username": "YOUR_DB_USER",
*  "password": "YOUR_DB_PASS",
*  "port": 5432,
*  "dialect": "postgres",
*  "modelsPath": path.join(__dirname, "../src/models"),
*  "options": {}
* }
* config.url = config.dialect + '://' + config.username + ':' + config.password + '@' + config.host + ':' + config.port + '/' + config.database
* var db = require('./db')(config)
*/

var fs = require("fs"),
    path = require("path"),
    Sequelize = require("sequelize")

module.exports = function(config){
  var db = {}
    , sequelize = new Sequelize(config.url, config)

  var modelsPath = config.modelsPath
  fs.readdirSync(modelsPath)
    .filter(function(file){
      return (file.indexOf(".") !== 0) && (file !== "index.js")
    })
    .forEach(function(file){
      var model = sequelize["import"](path.join(modelsPath, file))
      db[model.name] = model
    })

  Object.keys(db).forEach(function(modelName){
    if ("associate" in db[modelName]){
      db[modelName].associate(db)
    }
  })

  sequelize.sync(config.options)

  db.sequelize = sequelize
  db.Sequelize = Sequelize
  return db
}
