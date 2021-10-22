const EventEmitter = require('events').EventEmitter;

const db = new EventEmitter();

function Request() {
  const self = this;
  this.bigData = new Array(1e8).join('*');

  this.send = function (data) {
    console.log(data);
  };

  function onData(info) {
    self.send(info);
  }

  this.on = function () {
    db.on('data', onData);
  };

  this.end = function () {
    db.removeListener('data', onData);
  };
}

setInterval(function () {
  const request = new Request();
  request.on();
  console.log(process.memoryUsage().heapUsed);
  console.log(db);
  db.emit('data', { test: 'TEST' });
  request.end();
  console.log(db);
}, 500);

function test(param1, param2) {}

test(1, 2);
