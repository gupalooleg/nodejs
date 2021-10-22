const fs = require('fs');

fs.open('', 'r', (err, fd) => {
  if (err) {
    console.log(err);
  }
});

fs.readFile('', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Length: ${data.length} \nData: ${data.toString()}`);
  }
});
