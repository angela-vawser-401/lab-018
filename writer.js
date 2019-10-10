const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const writeFile = require('./file-write');

writeFile('./new-text.txt', 'Wooooooord to your Mother')
  .then(() => {
    socket.on('file-write', data => {
      socket.emit('file-save', data);
    });
  });