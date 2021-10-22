const http = require('http');

http
  .createServer(function (req, res) {
    res.end('OK');

    setTimeout(() => console.log('setTimeout'), 0);

    setImmediate(() => console.log('setImmediate'));

    process.nextTick(() => console.log('nextTick'));

    console.log('Console.log');

    const httpServer = http
      .createServer(function (req, res) {
        res.end('OK');
      })
      .listen(3001);

    httpServer.on('close', () => console.log('onClose'));

    httpServer.close(() => console.log('close'));

    const t = Date.now();
    while (t > Date.now() - 5000) {}
  })
  .listen(3000);
