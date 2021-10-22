const fs = require('fs');

const stream = fs.createReadStream('pg.jpg');

stream.on('open', (fd) => console.log('Open: ' + fd));
stream.on('ready', () => console.log('Ready'));
stream.on('end', () => console.log('End'));
stream.on('close', () => {
  console.log('Close');
  //clearInterval(interval);
});
stream.on('error', (err) => console.log('Error: ' + err));

let totalLength = 0;
stream.on('readable', () => {
  const data = stream.read();

  if (!data) return;

  totalLength += data.length;

  console.log(data);
  console.log('Length of all read segments: ' + totalLength);

  const t = Date.now();
  while (t > Date.now() - 2000) {}

  if (totalLength > 1e5) {
    stream.destroy(new Error('Readable: enough'));
    return;
  }
});

const interval = setInterval(() => console.log('Interval'), 1000);

setTimeout(() => {
  console.log('Timeout');
  clearInterval(interval);
}, 10000);
