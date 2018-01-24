/*
* Default configuration. Environment-specific configurations inherit from this.
*/
var path = require('path')

var config = {
  "debug": false,
  "log": {
    "level": "combined",
    "date_format": "YYYYMMDD",
    "filename": path.join("log", "%DATE%.log"),
    "frequency": "daily",
    "verbose": false
  },
  "http": {
    "port": 3000
  }
}
var db = {
  "host": "postgres",
  "database": "postgres",
  "username": "postgres",
  "password": "postgres",
  "port": 5432,
  "dialect": "postgres",
  "modelsPath": path.join(__dirname, "../src/models"),
  "options": {}
}
db.url = db.dialect + '://' + db.username + ':' + db.password + '@' + db.host + ':' + db.port + '/' + db.database
config.db = db

module.exports = config
