const http = require('http');
const fs = require('fs');

// const incase you want to use it for something else like websockets
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    // redirect
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
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
