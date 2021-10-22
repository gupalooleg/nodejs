const http = require('http');
//const fs = require('fs');

const httpServer = http
  .createServer(function (req, res) {
    /*     if (req.url == '/') {
      fs.readFile('asyncServer.js', function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.end('Server error');
          return;
        }
        res.end(data);
      });
    } else {
      res.statusCode = 404;
      res.end('Page not found');
    } */
    res.end('OK');
  })
  .listen(3000);

/* const memoryLogInterval = setInterval(function () {
  console.log(process.memoryUsage());
}, 1000);

setTimeout(function () {
  httpServer.close(function () {
    clearInterval(memoryLogInterval);
  });
}, 3000); */

setTimeout(() => httpServer.close(), 3000);

setInterval(() => console.log(process.memoryUsage()), 1000).unref();
