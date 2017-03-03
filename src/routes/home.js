'use strict'

var template = require('pug').compileFile(__dirname + '/../views/home.pug')
module.exports = function(app){
  app.get('/', function(req, res, next){
    try {
      var html = template({ title: 'Home' })
      res.send(html)
    } catch (e) {
      next(e)
    }
  });
}
