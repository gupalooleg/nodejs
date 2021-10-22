const http = require('http');
const parseArgs = require('minimist');

//console.log(process.argv.slice(2));
//console.log(process.env.HOME);

/* //NODE_ENV=DEV node server.js --port=3000
switch (process.env.NODE_ENV) {
  case 'PROD':
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
    break;
  case 'DEV':
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
    break;
  default:
    console.log('EXIT');
    process.exit(1);
} */

const argv = parseArgs(process.argv);
const port = argv.port || 3000;

http
  .createServer((req, res) => {
    res.end(`Port: ${port}`);
  })
  .listen(port);
