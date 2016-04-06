// var express = require('express');
// var app = express();
// var path = require('path');

// var	server = require('http').Server(app);
// // var io = require('socket.io')(server);


// app.use(express.static(path.join(__dirname,'public')));

// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

// io.listen(app);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

server.listen(3000);

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});