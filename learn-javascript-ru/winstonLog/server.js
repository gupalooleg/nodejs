const http = require('http');
const log = require('./log')(module);

const requestHandler = require('./requestHandler');

http.createServer(requestHandler).listen(1337, '127.0.0.1');

log.info(`Server is running.`);
