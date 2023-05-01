#!/usr/bin/node
const fs = require('fs');
const filepath = process.argv[2];
const dataIn = process.argv[3];
fs.writeFile(filepath, dataIn, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
});
