/*
* Production environment configuration. You can override defaults and/or add
* other configuration parameters here.
*/
var config = require('./config.global')

config.db.url = process.env.DATABASE_URL // points to production DB URL

module.exports = config;
