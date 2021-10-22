const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    if (req.url === '/pg.jpg') {
      sendFile(res, 'pg.jpg');
    } else {
      res.statusCode = 404;
      res.end('File not found.');
    }
  })
  .listen(3000);

function sendFile(res, file) {
  const stream = fs.createReadStream('pg.jpg');

  stream.on('readable', formResponse);
  stream.on('error', (err) => console.log(err));
  stream.on('end', () => res.end());

  function formResponse() {
    let data = stream.read();
    if (data && !res.write(data)) {
      console.log('Test');
      /*const t = Date.now();
      while (t > Date.now() - 3000) {} */

      stream.removeListener('readable', formResponse);
      res.once('drain', () => {
        console.log('Test drain');
        stream.on('readable', formResponse);
        formResponse();
      });
    }
  }
}

/* setInterval(() => console.log('Interval'), 1000); */
