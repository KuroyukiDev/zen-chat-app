const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMsg} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  // console.log('New user connected.');

  socket.emit('newMsg', generateMsg('Admin', 'Welcome to Zen Web Chat!'));

  socket.broadcast.emit('newMsg', generateMsg('Admin', 'A new user entered the chatroom'));

  socket.on('createMsg', (msg, callback) => {
    console.log('msg recieved on Server', msg);
    io.emit('newMsg', generateMsg(msg.from, msg.text));
    callback();
  });

  socket.on('disconnect', () => {
    console.log('User has disconnected from server.');
  });
});

server.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
