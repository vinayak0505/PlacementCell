const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req, res) {
    console.log("hello");
    res.writeHead(200, {'content-type': 'text/html'})
}
const server = http.createServer(requestHandler);

server.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("server is running on port: ", port);
})