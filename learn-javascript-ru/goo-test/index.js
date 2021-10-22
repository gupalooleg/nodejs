const path = require('path');

module.exports = function () {
  console.log(`Test module: ${path.basename(__dirname)}!`);
};
