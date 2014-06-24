var http = require('http');
http.createServer(function (req, res) {
    // 200 betyr ok på internett (eller, http, da)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hei \n');
}).listen(process.env.port);
