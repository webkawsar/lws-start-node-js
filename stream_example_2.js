const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // res.write('Hello Nodejs Programmer');
        // res.end();

        const ourReadStream = fs.createReadStream(`${__dirname}/file_module.txt`);
        ourReadStream.pipe(res);
    } else if (req.url === '/about') {
        res.write('Hello Nodejs Programmer');
        res.end();
    } else {
        res.write('Not found!');
        res.end();
    }
});

server.listen(3030);
console.log('Server is runnning on port 3030');
