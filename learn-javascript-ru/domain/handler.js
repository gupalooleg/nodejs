const fs = require('fs');

module.exports = function (req, res) {
  if (req.url === '/index.html') {
    fs.readFile(req.url.slice(1), function (err, data) {
      if (err) throw err;

      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Not found.');
  }
};
