'use strict'

const http = require('http');

let homeViewCounter = 0;
let aboutViewCounter = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    homeViewCounter++;
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write(`
      <h1>Home Page</h1>
      <p>View Counter: ${homeViewCounter}</p>
      <a href="/about">Go to About Page</a>
    `);
    res.end();
  } else if (req.url === '/about') {
    aboutViewCounter++;
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write(`
      <h1>About Page</h1>
      <p>View Counter: ${aboutViewCounter}</p>
      <a href="/">Go to Home Page</a>
    `);
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write(`
      <h1>404 Not Found</h1>
      <p>The requested page does not exist.</p>
      <a href="/">Go to Home Page</a>
    `);
    res.end();
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});