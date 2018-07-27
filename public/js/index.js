var socket = io();

socket.on('connect', function () {
  
});

socket.on('disconnect', function () {
  console.log('User has disconnected from server.');
});

socket.on('newMsg', function (msg) {
  console.log('newMsg', msg);
});
