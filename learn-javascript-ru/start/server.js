const log = require('./logger')(module);
const db = require('./db');
const User = require('./user');

function run() {
  db.connect();

  let vasya = new User('Vasya');
  let petya = new User('Petya');

  vasya.hello(petya);

  log(db.getMessage('Run'));
}

if (module.parent) {
  module.exports.run = run;
} else {
  run();
}
