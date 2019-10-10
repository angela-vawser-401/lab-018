const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('logger', data => {
    console.log(data);
  });
  socket.on('file-read', data => {
    socket.broadcast.emit('file-read', data);
  });
  socket.on('capitalize', data => {
    socket.broadcast.emit('capitalize', data);
  });
  socket.on('file-saved', () => {
    console.log('the deed is done');
  });
  socket.on('file-error', error => {
    console.log(error);
  });
});