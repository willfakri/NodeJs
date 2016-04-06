var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("<html><header><title>TITULO MAROTO</title></header><body><h1>As arvre somos nozes.</h1></body></html>");
    res.end();
}).listen(port);