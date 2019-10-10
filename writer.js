const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const writeFile = require('./file-write');

socket.on('capitalize', ({ path, content }) => {
  writeFile(path, content)
    .then(() => {
      socket.emit('file-saved');
    })
    .catch(error => {
      socket.emit('file-error', error);
    });
});