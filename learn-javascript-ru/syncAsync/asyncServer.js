const http = require('http');
const fs = require('fs');

http
  .createServer(function (req, res) {
    if (req.url == '/') {
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
    }
  })
  .listen(3000);
