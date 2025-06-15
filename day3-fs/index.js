var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('./demo.html', function(err, data) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    // appendFile()
    /* fs.appendFile('exampl2.txt', 'Hello Rahul ', function(err){
        if(err)throw err;
        console.log('Seved !');
        
    }); */

    // open()
    /* fs.open('./example.txt', 'w' , function(error, file){
      if(error)throw error;
      console.log('saved open() ! ', file);
    } ) */

    // writeFile()

    /* fs.writeFile('exm.txt', 'Rahul Rai data ', function(err, file){
      if(err) throw err;
      console.log('saved rahul !');
      
    }) */

    // delete file or unlink()
    /* fs.unlink('example.txt', function(er, file){
      if(er)throw er;
      console.log("deleted !");
      
    }) */

    // fs.rename()
    fs.rename('exampl.txt', 'renameTest.txt' , function(err,file){
      if(err) throw err; 
      console.log('Renamed ');
      
    })



    res.write(data);
    return res.end();
  });
}).listen(8080);