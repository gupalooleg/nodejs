const http = require('http');
const fs = require('fs');

http
  .createServer(function (req, res) {
    if (req.url == '/') {
      const info = fs.readFileSync('syncServer.js');
      res.end(info);
    } else {
      res.statusCode = 404;
      res.end('Page not found');
    }
  })
  .listen(3000);
