#!/bin/env node

var express = require('express');
var app = express();

app.get('/' , function(req , res) {
	res.send("teste deploy node.js no openshift")
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
