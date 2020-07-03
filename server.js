var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var expressValidator = require("express-validator");
// require("dotenv").config();

var port = process.env.PORT || 3002;
var routes = require('./server/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
// app.use(expressValidator());

app.use('/api', routes);
app.get('**', function (req, res) {
  res.send({
        Status: 404,
        Message: 'Requesttt denied!'
    })
})

app.set('port', port);
console.log("App started on port", port);
var server = http.createServer(app);
server.listen(port);

module.exports = app;
