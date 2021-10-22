const http = require('http');
const fs = require('fs');

const httpServer = http.createServer(function (req, res) {
  if (req.url === '/index.html') {
    fs.readFile(req.url.slice(1), function (err, data) {
      if (err) throw err;

      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Not found.');
  }
});

module.exports = httpServer;
