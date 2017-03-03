/*
* This determines which configuration to load based on the environment variable
* NODE_ENV, or if that's unavailable, it defaults to 'development' config.
*/
var env = process.env.NODE_ENV || 'development'
  , cfg = require('./config.'+env);

module.exports = cfg;
