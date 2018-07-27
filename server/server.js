const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  // console.log('New user connected.');

  socket.emit('newMsg', {
    from: 'Admin',
    text: 'Welcome to Zen Web Chat!',
    createdAt: new Date().getTime()
  });

  socket.broadcast.emit('newMsg', {
    from: 'Admin',
    text: 'A new user entered the chatroom',
    createdAt: new Date().getTime()
  });

  socket.on('createMsg', (msg) => {
    console.log('msg recieved on Server', msg);
    io.emit('newMsg', {
      from: msg.from,
      text: msg.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('User has disconnected from server.');
  });
});

server.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
