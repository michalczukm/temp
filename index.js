const http = require('http');

let counter = 0;

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    counter ++;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`counter:${counter}`);
});

server.listen(port, () => {
  console.log(`Server running at http://${''}:${port}/`);
});