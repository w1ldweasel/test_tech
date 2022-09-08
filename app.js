var express = require('express');
const { connected } = require('process');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){
  console.log(Client connected...'');

<<<<<<< Updated upstream
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
=======
>>>>>>> Stashed changes
});

app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');
});

server.listen(8080);
