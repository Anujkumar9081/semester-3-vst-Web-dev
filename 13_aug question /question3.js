const http = require('http');

const server = http.createServer((req, res) => {
  
  if (req.url === '/') {
    res.end('Home Page');
  } 
  else if (req.url === '/products') {
    res.end('Our Products');
  } 
  else if (req.url === '/login') {
    res.end('Login Page');
  }
   else {
    res.statusCode = 404;
    res.end('Page Not Found');
  }

});

server.listen(3000, () => {
  console.log('Server is running');
});