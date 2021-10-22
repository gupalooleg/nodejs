const winston = require('winston');

module.exports = function (module) {
  return createLogger(module.filename);
};

function createLogger(filename) {
  if (filename.match(/requestHandler.js$/)) {
    return winston.createLogger({
      transports: [
        new winston.transports.Console({
          level: 'info',
        }),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
      ],
    });
  } else {
    return winston.createLogger({ silent: true });
  }
}
