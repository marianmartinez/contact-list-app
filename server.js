// set up ======================================================================
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;  //whatever is in the environment variable PORT, or 3000

//configuration ================================================================
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
