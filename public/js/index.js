var socket = io();

socket.on('connect', function () {
  console.log('New user connected.');
});

socket.on('disconnect', function () {
  console.log('User has disconnected from server.');
});
