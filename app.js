// Libraries
var http    =   require('http'),
    express =   require('express'),
    sugar = require('sugar');

// Create Express
var app = express();

// Create HTTP server and socket.io
server = http.createServer(app);
server.listen(2052);

//* //////////////////////////////////////////
//
//  Routing
//
//* //////////////////////////////////////////
app.get('/test', function (req, res) {
    res.send("YAA!!!");
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});