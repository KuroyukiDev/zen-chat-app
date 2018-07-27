var socket = io();

socket.on('connect', function () {

});

socket.on('disconnect', function () {
  console.log('User has disconnected from server.');
});

socket.on('newMsg', function (msg) {
  console.log('newMsg', msg);
  var li = jQuery('<li class="list-group-item"></li>');
  li.text(`${msg.from}: ${msg.text}`);

  jQuery('#chatlog').append(li);
});


jQuery('#msg-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMsg', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });

});
