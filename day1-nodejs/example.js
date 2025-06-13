
var http = require('http'); // this is inbuild moduls with node.js
var dt = require('./ed');// this is created by me moduls with file name own_moduls

http.createServer(function (req, res) // this is creating server here
{ 
  res.writeHead(200, {'Content-Type': 'text/html'}); // this is set header 
  res.write("The date and time are currently: " + dt.myDateTime()); // this is write the extarnal moduls results 
  res.end(); // this is end the loop 

}).listen(8080); // this listening port here 



