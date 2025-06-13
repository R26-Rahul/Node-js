// 

// this is inbuild moduls
var http = require('http'); // this is add form node 
var dt = require('./ed');

http.createServer(function (req, res) // this is creating server here
{ 
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.end('Hello World!');

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();



}).listen(8080);



