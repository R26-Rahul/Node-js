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

fs.appendFile('mynewfile1.txt', 'Hello rai!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

```
- The fs.appendFile() method appends the specified content at the end of the specified file
- The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
- The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created
- To delete a file with the File System module,  use the fs.unlink() method.
- To rename a file with the File System module,  use the fs.rename() method.

##### Node.js URL Module
```
var url = require('url');
var add = 'http://localhost:8080/default.htm?year=2017&month=february';
// parse the add in side the url 
var q =url.parse(add, true);

console.log(q);

```

```output

Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8080',
  port: '8080',
  hostname: 'localhost',
  hash: null,
  search: '?year=2017&month=february',
  query: [Object: null prototype] { year: '2017', month: 'february' },
  pathname: '/default.htm',
  path: '/default.htm?year=2017&month=february',
  href: 'http://localhost:8080/default.htm?year=2017&month=february'
}


```


```
/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);


```
##### Node.js File Server
- Create two html files and save them in the same folder as your node.js files.
- one.html , two.html serve all file using index.js


#### What is NPM?
- NPM is a package manager for Node.js packages, or modules if you like.
- A package in Node.js contains all the files you need for a module.
- Modules are JavaScript libraries you can include in your project.

##### Events in Node.js
- Every action on a computer is an event. Like when a connection is made or a file is opened.
- Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file.

```example 
var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
  res.write('');
});

```
#### Node.js Upload Files
- here is a very good module for working with file uploads, called "Formidable".

```
var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);


```
- file upload and file saved

```
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);

```

#### The Nodemailer Module

```
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
```