const EventEmitter = require('events').EventEmitter;

const server = new EventEmitter();

server.on('request', function (request) {
  request.approved = true;
});

server.on('request', function (request) {
  console.log(request);
});

server.on('error', function (error) {
  console.log(error);
});

server.emit('error', new Error('Test error...'));
server.emit('request', { from: 'Client' });
server.emit('request', { from: 'One more client' });
