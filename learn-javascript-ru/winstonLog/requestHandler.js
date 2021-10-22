const url = require('url');
const log = require('./log')(module);

module.exports = function (req, res) {
  const parsedURL = url.parse(req.url, true);
  log.info(`Got request: ${req.method} ${req.url}`);

  if (req.method === 'GET' && parsedURL.pathname === '/echo' && parsedURL.query.message) {
    log.debug(`Echo: ${parsedURL.query.message}`);
    res.end(parsedURL.query.message);
    return;
  }

  log.error('Not found');
  res.statusCode = 404;
  res.end('Not found');
};
