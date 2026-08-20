const http = require('http');

const server = http.createServer((req, res) => {
 console.log('url',req.url);
 console.log('method',req.method);
 
 
  
  res.end('Welcome to my server');
});

server.listen(3000, () => {
  console.log('server running');
});