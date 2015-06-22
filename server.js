(function () {
  "use strict";

  // set up ====================================================================
  var express = require('express');
  var app = express();
  var port = process.env.PORT || 3000; //whatever is in the environment variable PORT, or 3000
  var mongojs = require('mongojs');
  var db = mongojs('contactlist', ['contactlist']);
  var bodyParser = require('body-parser');

  // configuration =============================================================
  app.use(express.static(__dirname + '/public/app/'));
  app.use('/bower_components',  express.static(__dirname + '/bower_components'));
  app.use(bodyParser.json()); // for parsing application/json
  app.use(function(req, res, next) { // middleware to use for all requests
    console.log('Request Type:', req.method);
    next();
  });

  // routes ====================================================================
  app.get('/contacts', getContacts);
  app.post('/contacts', addContact);
  app.delete('/contacts/:id', deleteContact);

  // get =======================================================================
  function getContacts(req, res){
    db.contactlist
      .find(function(err, docs){
        res.json(docs);
    });
  }

  // post ======================================================================
  function addContact(req, res){
    var contact = req.body;
    db.contactlist
      .insert(contact,function(err, doc){
        res.json(doc);
    });
  }

  // delete ====================================================================
  function deleteContact(req, res){
    var id = req.params.id;
    db.contactlist
      .remove({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    });
  }

  // listen (start app with node server.js) ====================================
  app.listen(port);
  console.log('App listening on port ' + port);

}());
