/*
* Development environment configuration. You can override defaults and/or add
* other configuration parameters here.
*/
var config = require('./config.default')

config.debug = true // turn on debugging
config.log.level = 'combined' // more verbose logging
config.db.host = '127.0.0.1' // use development db
config.db.options.force = true // Overwrite tables on each start

module.exports = config;
