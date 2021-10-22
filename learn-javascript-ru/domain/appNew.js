const domain = require('domain');
const handler = require('./handler');

const serverDomain = domain.create();
let server;

serverDomain.on('error', function (err) {
  console.error('Server error: ', err);
  if (server) server.close();

  setTimeout(() => {
    process.exit(1);
  }, 1000).unref();
});

serverDomain.run(function () {
  const http = require('http');
  server = require('./handler');

  server = http
    .createServer((req, res) => {
      const reqDomain = domain.create();
      reqDomain.add(req);
      reqDomain.add(res);

      reqDomain.on('error', (err) => {
        res.statusCode = 500;
        res.end('Server error: ' + err);
        console.log('Error for request: ' + req);

        serverDomain.emit('error', err);
      });

      reqDomain.run(() => {
        handler(req, res);
      });
    })
    .listen(3000);
});
