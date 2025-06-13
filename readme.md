# NodeJs start basic to advance here cls 
##### Learn Node.js
- Node.js is an open source server environment.

- Node.js allows you to run JavaScript on the server.
### code here 
```
// include modules
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
#### Node.js as a Web Server
- The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

- Use the createServer() method to create an HTTP server:
- The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.
- Add an HTTP Header
  ```
  res.writeHead(200, {'Content-Type': 'text/html'});
  ```
##### Read the Query String
- This object has a property called "url" which holds the part of the url that comes after the domain name:
  ```
    res.write(req.url);

  ```
#### Split the Query String
- Split the query string into readable parts:
  ```
  var http = require('http');
  var url = require('url');

  http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
  }).listen(8080);
  ```

### Node.js File System Module
- Common use for the File System module:
  - Read files
  - Create files
  - Update files
  - Delete files
  - Rename files

- The fs.readFile() method is used to read files on your computer.
```
  fs.readFile('demofile1.html', function(err, data){} )

```
#### Create Files
    - fs.appendFile()
    - fs.open()
    - fs.writeFile()

  -  The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

```
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

```

