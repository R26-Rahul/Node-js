var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('./demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.appendFile('exampl.txt', 'Hello Rahul ', function(err){
        if(err)throw err;
        console.log('Seved !');
        
    });
    res.write(data);
    return res.end();
  });
}).listen(8080);