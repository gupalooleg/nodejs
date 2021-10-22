const http = require('http');
const fs = require('fs');
const chat = require('./chat');

http
  .createServer(function (req, res) {
    switch (req.url) {
      case '/':
        sendFile(res, 'index.html');
        break;
      case '/subscribe':
        subscribe(req, res);
        break;
      case '/publish':
        publish(req, res);
        break;
      default:
        res.statusCode = 404;
        res.end('Page not found.');
    }
  })
  .listen(3000);

function publish(req, res) {
  let data = '';
  let message = '';

  req.on('readable', () => {
    data += req.read() ?? '';

    if (data.length > 1e4) {
      res.statusCode = 413;
      res.end('Your message is soo big.');
    }
  });

  req.on('end', () => {
    try {
      message = JSON.parse(data).message;
    } catch (e) {
      res.statusCode = 400;
      res.end('Bad request.');
    }

    chat.publish(message);
    res.end('OK');
  });
}

function subscribe(req, res) {
  res.on('close', () => {
    chat.deleteSubscribersResponse(res);
  });

  chat.subscribe(res);
}

function sendFile(res, file) {
  readStream = fs.createReadStream(file);

  readStream.on('error', (err) => {
    res.statusCode = 500;
    res.end('Server error.');
    console.log(err);
  });

  readStream.pipe(res);

  res.on('close', () => {
    readStream.destroy();
    console.log('Response stream closed.');
  });
}
