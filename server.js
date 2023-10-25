const http = require('http');
const fs = require('fs');

// const incase you want to use it for something else like websockets
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // send an html file
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      // or
      res.end(data);
    }
  });
  // write the response
  // res.write('<p>hello, ninjas</p>');
  // res.write('<p>hello, again ninjas</p>');

  // // end the response
  // res.end();
});

// localhost is the default value for the second argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
