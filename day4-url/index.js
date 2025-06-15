var url = require('url');
var add = 'http://localhost:8080/default.htm?year=2017&month=february';
// parse the add in side the url 
var q =url.parse(add, true);

console.log(q.query.month);
