const http = require('http');

const httpServer = http
  .createServer(function (req, res) {
    setTimeout(() => console.log('timeout'), 0);
    const t = Date.now();
    while (t > Date.now - 3000) {}

    console.log('1');
    process.nextTick(function () {
      console.log('Tick');
      process.nextTick(function () {
        console.log('Tick1');
      });
    });
    setImmediate(() => console.log('Immediate'));
    console.log('2');
    res.end('OK');
  })
  .listen(3000);
