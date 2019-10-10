const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fileRead = require('./file-read');
const data = { path: process.argv[2] };

fileRead(process.argv[2])
  .then(results => {
    data.copy = results;
    socket.emit('file-read', data);
  })
  .catch(error => {
    socket.emit('file-error', error);
  });