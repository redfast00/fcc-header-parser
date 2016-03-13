'use strict';
var http = require('http');
var server = http.createServer(function (req, res) {
    var language = req.headers['accept-language'].split(',')[0];
    var operatingSystem = req.headers['user-agent'].split(/\(|\)/)[1];
    var IPAdress = req.connection.remoteAddress;
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        'OS': operatingSystem,
        'remoteIP': IPAdress,
        'language': language
    }));
});
server.listen(process.env.PORT || 5000);