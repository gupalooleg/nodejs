const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

//const ROOT = `${__dirname}/public`;
const ROOT = path.join(__dirname, 'public');

http
  .createServer((req, res) => {
    if (!checkAccess(req)) {
      res.statusCode = 403;
      res.end('Tell me the secret to access.');
      return;
    }

    sendFileSafe(res, url.parse(req.url, true).pathname);
  })
  .listen(3000);

function checkAccess(req) {
  return url.parse(req.url, true).query.secret === 'o_O';
}

function sendFileSafe(res, filePath) {
  try {
    filePath = decodeURIComponent(filePath);
  } catch (e) {
    res.statusCode = 400;
    res.end('Bad request.');
    return;
  }

  if (filePath.indexOf('\0') !== -1) {
    res.statusCode = 400;
    res.end('Bad request.');
    return;
  }

  //filePath = path.normalize(path.join(ROOT, filePath));
  filePath = path.join(ROOT, filePath);

  if (filePath.indexOf(ROOT) != 0) {
    res.statusCode = 404;
    res.end('File not found.');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.end('File not found.');
      return;
    }

    sendFile(res, filePath);
  });
}

function sendFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      //throw err;
      res.statusCode = 500;
      res.end('Reading file error.');
      return;
    }

    const mime = require('mime').getType(filePath);
    res.setHeader('Content-Type', `${mime}; charset=utf8`);
    res.end(data);
  });
}
