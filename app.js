#!/bin/env node

var express = require('express');
var app = express();

app.get('/' , function(req , res) {
	res.send("teste deploy node.js no openshift")
});


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
console.log("ipAddress: " + ipaddress);
var server = app.listen(port, ipaddress,  function() {
    console.log('Listening on port %d', server.address().port);
});
