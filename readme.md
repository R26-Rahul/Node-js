# NodeJs start basic to advance here cls 
##### Learn Node.js
- Node.js is an open source server environment.

- Node.js allows you to run JavaScript on the server.
### code here 
```
// in-build modules
var http = require('http'); 


// Create Your Own Modules
var dt = require('./ed');

http.createServer(function (req, res) 
{ 
  res.writeHead(200, {'Content-Type': 'text/html'}); 

  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
  

}).listen(8080); 

```