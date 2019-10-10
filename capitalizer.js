const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('file-read', data => {
  data.copy = data.copy.toUpperCase();
  socket.emit('capitalize', data);
});