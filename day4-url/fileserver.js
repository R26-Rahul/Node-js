var http = require('http');
var url = require('url');
var fs =require('fs')

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var fileName = '.'+ q.pathname;
    fs.readFile(fileName, function(error, data ){

    
    if(error) {
        res.writeHead(404,{'content-type':'text/html'})
        return res.write('404 page not found ?')
    }
     res.writeHead(200,{'content-type':'text/html'})
     res.write(data);
     return res.end();
        });
}).listen(8080)