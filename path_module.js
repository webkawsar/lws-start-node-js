const path = require('path');

const myPath = 'D:Development/lws/node-jsserver_and_core_modules.js';

// path => basename, dirname, extname, parse

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
console.log(path.parse(myPath));
