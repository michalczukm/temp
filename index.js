const http = require('http');

let counter = 0;

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  setTimeout(() => {
    console.log('hit!');
    counter ++;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`counter:${counter}`);
  }, 2000);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});