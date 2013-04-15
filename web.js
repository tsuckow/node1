var port = Number(process.env.PORT) || Number(process.env.VCAP_APP_PORT) || 80;
var io = require('socket.io').listen(port);

io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 20); //seconds
  io.set("log level", 2); //0 - error, 1 - warn, 2 - info, 3 - debug
});

io.sockets.on('connection', function (socket) {
  console.log("New Connection");
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('disconnect', function (data) {
    console.log("Disconnected");
  });
});