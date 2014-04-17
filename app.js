// Libraries
var http    =   require('http'),
    express =   require('express'),
    sugar = require('sugar');

// Create Express
app = express();
app.configure(function () {
    app.use(express.bodyParser());
});

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