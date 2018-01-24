/*
* Production environment configuration. You can override defaults and/or add
* other configuration parameters here.
*/
var config = require('./config.default')

if (process.env.DATABASE_URL) config.db.url = process.env.DATABASE_URL // points to production DB URL

module.exports = config;
