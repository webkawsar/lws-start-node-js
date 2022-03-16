const fs = require('fs');

// fs => writeFileSync, appendFileSync, readFileSync, readFile

// fs.writeFileSync('file_module.txt', 'Test File module system ');
// fs.appendFileSync('file_module.txt', 'Test File module system again ');
// const data = fs.readFileSync('file_module.txt');
// console.log(data);

// let test = 1;

fs.readFile('file_module.txt', (error, chunk) => {
    // console.log(chunk.toString());
    console.log(chunk);
    // test++;
    // console.log(test, 'test');
    // console.log(error);
});

console.log('Hello');
