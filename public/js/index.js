var socket = io();

socket.on('connect', function () {
  console.log('New user connected.');

  socket.emit('createMsg', {
    from: 'Ayuchan',
    text: 'Did it work?'
  });
});

socket.on('disconnect', function () {
  console.log('User has disconnected from server.');
});

socket.on('newMsg', function (msg) {
  console.log('newMsg', msg);
});
