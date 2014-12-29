/**
 * Created by ramos on 29/12/14.
 */
var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    loginController = require('./controller/loginController'),
    constants = require('./util/constants');

/* App Configuration */
var app = express();
app.set('port', constants.app.port);
app.set('title', constants.app.name);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Include CORS and JSON Type on ALL res's  */
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Content-type', constants.header.json);
    res.removeHeader("X-Powered-By"); //Remove header for safety reasons
    next();
});

//ROUTES
app.post('/login', function(req, res) {
    loginController.login(req, res);
});

//DEFAULT ROUTE
app.post( '*' , function(req, res) {
    res.writeHead(constants.http.notFound, constants.header.json);
    _result.status = constants.http.ok;
    _result.data = 'Route not found';
    res.end(JSON.stringify(_result));
});

http.createServer(app).listen(app.get('port'), function () {
    console.log(app.get('title') + ' listening on port ' + app.get('port'));
});