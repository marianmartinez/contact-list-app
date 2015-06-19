(function () {
  "use strict";

  // set up ======================================================================
  var express = require('express');
  var app = express();
  var port = process.env.PORT || 3000;  //whatever is in the environment variable PORT, or 3000
  var mongojs = require('mongojs');
  var db = mongojs('contactlist', ['contactlist']);

  // configuration ================================================================
  app.use(express.static(__dirname + '/public/app/'));
  app.use('/bower_components',  express.static(__dirname + '/bower_components'));

  // routes ================================================================
  app.get('/contacts', getContacts);

  function getContacts(req, res){
    console.log('I received a GET request');

    db.contactlist
      .find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });

  }

  // listen (start app with node server.js) ======================================
  app.listen(port);
  console.log('App listening on port ' + port);

}());
