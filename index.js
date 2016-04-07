var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

server.listen(3000);
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'Gee Gee Gee Gee baby baby baby' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});