// set up ======================================================================
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;  //whatever is in the environment variable PORT, or 3000

// configuration ================================================================
app.use(express.static(__dirname + '/public/app/'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// routes ================================================================
app.get('/contacts', getContacts);

function getContacts(req, res){
  console.log('I received a GET request');

  var contacts = [
    {
        "id": 1,
        "name": "Pepe",
        "email": "pepe@pepe.com",
        "phone": "666831799"
    },
    {
        "id": 2,
        "name": "Juan",
        "email": "juan@juan.com",
        "phone": "630444444"
    },
    {
        "id": 3,
        "name": "Ana",
        "email": "ana@ana.com",
        "phone": "680555555"
    }
  ];

  res.json(contacts);

}

// listen (start app with node server.js) ======================================
app.listen(port);
console.log('App listening on port ' + port);
