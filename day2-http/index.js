const http = require('http');
const { text } = require('stream/consumers');
var url = require('url'); // http://localhost:3000/?year=2017&month=July 

//create a server object:
const server = http.createServer(function(req , res){
    console.log(req.url , req.method, req.headers);
    res.writeHead(200,('Content-Type', 'text/html')); // writing header 
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write('Hello world'); //write a response to the client
    res.end(txt);//end the response
}).listen(3000); //the server object listens on port 3000