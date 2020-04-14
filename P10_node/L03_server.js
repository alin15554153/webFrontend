var http = require('http');
var how2j = require('./L03_how2j');
how2j.hi();
var server = http.createServer(how2j.service);
server.listen(6088);