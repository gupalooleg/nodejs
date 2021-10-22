const util = require('util');

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log('Walk ' + this.name);
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.jump = function () {
  console.log('Jump ' + this.name);
};

util.inherits(Rabbit, Animal);

let rabbit = new Rabbit('Rodjer');
rabbit.jump();
rabbit.walk();
