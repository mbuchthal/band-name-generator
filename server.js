'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var getRandomWord = require('./lib/getRandomWord.js');
var postWord = require('./lib/postWord.js');
var Adjective = require('./lib/adjective.js');
var Noun = require('./lib/noun.js');
var Verb = require('./lib/verb.js');
var app = express();
var port = process.env.PORT || 3000;

var verb = new Verb();
var adjective = new Adjective();
var noun = new Noun();

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(port, function() {
  console.log('Server started on port ' + port);
});

app.post('/adjective', function (req, res) {
  adjective[req.body.word] = true;
  res.json( postWord(req.body.word, adjective));
});

app.post('/noun', function (req, res) {
  noun[req.body.word] = true;
  res.json( postWord(req.body.word, noun));
});

app.post('/verb', function (req, res) {
  verb[req.body.word] = true;
  res.json( postWord(req.body.word, verb));
})

app.get('/adjective', function (req, res) {
  res.json(getRandomWord(adjective));  // returning a JSON objective
});

app.get('/noun', function (req, res) {
  res.json(getRandomWord(noun));
});

app.get('/verb', function (req, res) {
  res.json(getRandomWord(verb));
});



