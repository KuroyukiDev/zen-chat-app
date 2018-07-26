var socket = io();

socket.on('connect', function () {
  console.log('New user connected.');

  socket.emit('createEmail', {
    to: 'jane@example.com',
    text: "Hey, I'm doing well, thanks for asking!",
    createAt: 124
  });
});

socket.on('disconnect', function () {
  console.log('User has disconnected from server.');
});

socket.on('newEmail', function(email) {
  console.log('New email', email);
});
