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
  const stream = fs.createReadStream(file);

  stream.on('error', (err) => {
    res.statusCode = 500;
    res.end('Server error.');
    console.log(err);
  });

  stream.on('open', () => {
    console.log('open');
  });

  stream.on('close', () => {
    console.log('close');
  });

  stream.pipe(res);
  //stream.pipe(fs.createWriteStream('1.jpg'));

  /*   To check "close" event during slow loading, it is better to replace
  the current file with a large file 
  
  curl --limit-rate 1k --output - http://127.0.0.1:3000/test.html*/
  res.on('close', () => {
    stream.destroy();
    console.log('Res close');
  });
}
