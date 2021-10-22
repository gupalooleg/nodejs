const http = require('http');

const server = new http.Server();

server.listen(1337, '127.0.0.1');

const emit = server.emit;
server.emit = function (event /*,[...args] */) {
  console.log(event);
  emit.apply(server, arguments);
};

let counter = 0;
server.on('request', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end(`Привет, мир! ${++counter}`);
});

/* http
  .createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Привет, мир!');
  })
  .listen(1337, '127.0.0.1'); */
