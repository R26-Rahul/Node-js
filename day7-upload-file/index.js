var http = require('http');
var fs =require('fs');
const url = require('url');


http.createServer(function (req, res) {    
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`
    	<form action="fileupload" method="post" enctype="multipart/form-data">
        <input type="file" name="filetoupload"><br>
        <input type="submit">

        </form>
    `)
  return res.end();
}).listen(8080);