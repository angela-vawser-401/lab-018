const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('file-read', data => {
  socket.emit('capitalize', data.toUpperCase());
})
  .catch(error => {
    socket.emit('file-error', error);
  });