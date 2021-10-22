const db = require('../db');

function User(name) {
  this.name = name;
}

User.prototype.hello = function (who) {
  console.log(`${this.name}: ${db.getMessage('Hello')}, ${who.name}!`);
};

module.exports = User;
