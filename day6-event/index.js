var fs = require('fs');
var sv = fs.createReadStream('./demo.txt');
sv.on('open', function(){
    console.log('file open !');
    
});