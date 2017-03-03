var config = require('./config')
  , express = require('express')
  , fs = require('fs')
  , path = require('path')
  , FileStreamRotator = require('file-stream-rotator')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , app = express()
  , http = require('http').Server(app)
  , io = require('socket.io')(http)
  , db = require('./lib/db')(config.db)
  , opts = {"config": config, "io": io, "db": db}

fs.existsSync(path.dirname(config.log.filename)) || fs.mkdirSync(path.dirname(config.log.filename))
var logStream = FileStreamRotator.getStream(config.log)

app.use(logger((config.log.level), {stream: logStream}))
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

var routes = require('./src/routes')(app, opts)

io.on('connection', function(socket){
  console.log('a user connected')
  socket.on('disconnect', function(){
    console.log('user disconnected')
  })
})

http.listen(config.http.port, function(){
  console.log('listening on http://localhost:'+config.http.port)
})
