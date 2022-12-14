const http = require('http');
const hostname = 'localhost';
const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body>Welcome to Node JS!</body></html>');
// });

const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log('Request for page ' + req.url + ' using ' + req.method + 'method');
    if (req.method == 'GET') {
        var fileUrl = req.url;
        if (req.url == '/') //default file is index.html
            fileUrl = '/index.html';
        var filePath = path.resolve('./public' + fileUrl);
        fs.exists(filePath, (exists) => {
            if (!exists) {
                fileUrl = '/error.html';
                filePath = path.resolve('./public' + fileUrl);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
            }
            fs.createReadStream(filePath).pipe(res);
        });
    }
    else {
        fileUrl = '/error.html';
        filePath = path.resolve('./public' + fileUrl);
        fs.createReadStream(filePath).pipe(res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server started and accessible via http://${hostname}:${port}/`);
});