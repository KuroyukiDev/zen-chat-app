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
  console.log('New user connected.');

  socket.emit('newMsg', {
    from: 'KY',
    text: "Yup, that worked for me!",
    createAt: 123
  });

  socket.on('createMsg', (msg) => {
    console.log('msg recieved on Server', msg);
  });

  socket.on('disconnect', () => {
    console.log('User has disconnected from server.');
  });
});

server.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
