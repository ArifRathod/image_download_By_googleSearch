GLOBAL.approot = __dirname; 
var path = require('path'); 
GLOBAL.parentRoot = path.join(__dirname, '../'); //for code

var express = require("express"),
    bodyParser = require("body-parser"),
    config = require('./config/config.js'),
    db = require("./database/db"),
    routes = require('./routes'),    
    app = express();
app.use(bodyParser.urlencoded({
    extended: true
})); 

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb'}));
app.use(express.static(__dirname + '/public'));


app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




app.post('/searchFromGoogle', routes.searchFromGoogle);
app.post('/getList', routes.getList);


var port = config.port;

var server = app.listen(port, function () {
    console.log('Listening on port %d', server.address().port); 
});


