const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fileSaved = require('./file-saved');

fileSaved(process.argv[2])
  .then(data => {
    socket.emit('file-read', data);
  })
  .catch(error => {
    socket.emit('file-error', error);
  });

// Writes it back to the file system