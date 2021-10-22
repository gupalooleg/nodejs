const http = require('http');
const debug = require('debug')('server');

const requestHandler = require('./requestHandler');

http.createServer(requestHandler).listen(1337, '127.0.0.1');

debug(`Server is running.`);

/* Module 'debug'(Git Bash)
    export DEBUG=server,server:*
    echo $DEBUG */
