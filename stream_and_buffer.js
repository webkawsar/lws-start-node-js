// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/file_module.txt`, 'utf8');

// ourReadStream.on('data', (chunk) => {
//     // console.log(chunk.toString());
//     console.log(chunk);
// });
// console.log('Hello');

const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/file_module.txt`, 'utf8');
const ourWriteStream = fs.createWriteStream(`${__dirname}/stream_output.txt`);

// let test = 1;

// ourReadStream.on('data', (chunk) => {
//     // console.log(chunk.toString());
//     // console.log(chunk);
//     ourWriteStream.write(chunk);
//     // test++;
//     // console.log(test, 'test');
// });
// // console.log('Hello');

// Alternate easy way
ourReadStream.pipe(ourWriteStream);
