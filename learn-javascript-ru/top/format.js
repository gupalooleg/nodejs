const util = require('util');

let str = util.format('My %s %d %j', 'string', 123, { a: 4, b: 'str' });
console.log(str);
console.log('My %s %d %j', 'string', 123, { a: 4, b: 'str' });
