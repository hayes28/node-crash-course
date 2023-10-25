const http = require('http');

// const incase you want to use it for something else like websockets
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

// localhost is the default value for the second argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
