const domain = require('domain');

const serverDomain = domain.create();

serverDomain.on('error', function (err) {
  console.error('Domain catched %s', err);
});

serverDomain.run(function () {
  const server = require('./server');
  server.listen(3000);
});
