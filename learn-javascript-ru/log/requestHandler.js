const url = require('url');
const debug = require('debug')('server:requestHandler');

module.exports = function (req, res) {
  const parsedURL = url.parse(req.url, true);
  debug(`Got request: ${req.method} ${req.url}`);

  if (req.method === 'GET' && parsedURL.pathname === '/echo' && parsedURL.query.message) {
    debug(`Echo: ${parsedURL.query.message}`);
    res.end(parsedURL.query.message);
    return;
  }

  debug('Not found');
  res.statusCode = 404;
  res.end('Not found');
};
