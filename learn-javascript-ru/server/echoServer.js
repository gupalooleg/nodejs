const http = require('http');
const url = require('url');

http
  .createServer(function (req, res) {
    const parsedURL = url.parse(req.url, true);

    if (parsedURL.pathname === '/echo' && parsedURL.query.message) {
      res.setHeader('Cache-control', 'no-cache');
      //res.writeHead(200, { 'Cache-control': 'no-cache' });

      console.log(res.getHeaders());

      res.end(parsedURL.query.message);
    } else {
      res.statusCode = 400;
      res.end('Page not found');
    }
  })
  .listen(1337, '127.0.0.1');
