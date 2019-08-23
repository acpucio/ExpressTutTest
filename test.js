var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.setHeader('Content-type', 'text/plain');
    res.end('You\'re in the reception');
});

app.get('/basement', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\’re in the wine cellar. Those bottles are mine!');
});

app.get('/floor/:floornum/bedroom', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in the bedroom on floor ' + req.params.floornum);
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page cannot be found!');
});

app.listen(8080);
