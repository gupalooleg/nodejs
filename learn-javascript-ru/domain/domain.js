const domain = require('domain');
const fs = require('fs');
const http = require('http');

const serverDomain = domain.create();
let httpServer;

serverDomain.on('error', function (err) {
  console.error('Domain catched %s', err);
});

serverDomain.run(function () {
  /*   console.log(process.domain);
  error(); */
  /*   setTimeout(function () {
    error();
  }, 1000); */
  /*   fs.readFile(__filename, (err, data) => {
    error();
  }); */
  /*   setTimeout(() => {
    fs.readFile(__filename, (err, data) => {
      error();
    });
  }, 1000); */
  /*   serverDomain.add(httpServer);
  console.log(process.domain);
  // serverDomain.remove(httpServer);
  // console.log(process.domain); */

  httpServer = http.createServer();
});

httpServer.on('boom', () => {
  setTimeout(() => {
    fs.readFile(__filename, (err, data) => {
      error();
    });
  }, 1000);
});

httpServer.emit('boom');
