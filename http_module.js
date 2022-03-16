const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Nodejs Developer');
        res.end();
    } else if (req.url === '/about') {
        res.write('About page');
        res.end();
    } else {
        res.write('Not found!');
        res.end();
    }
});

// server.on('connection', () => {
//     console.log('Connection started');
// });

server.listen(3000);

console.log('Server is running on 3000');
