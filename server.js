var express = require("express");
var bodyParser = require('body-parser');
var getRandomWord = require('./lib/getRandomWord');
var Adjective = require('./lib/adjective');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var bandNames = [
  "Wicked Purple Mountain Ranges",
  "Pickled Princes",
  "Neverly Appointed"
];

var adjectives = [
  'pretty',
  'ugly',
  'wicked',
  'foxy',
  'witty',
  'red',
  'sick',
  'savory'
];

var quotes = ["I like dogs.", "I hate cats.", "Death to penguins.", "Birds are noisy."];

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(port, function() {
  console.log('Server started on port ' + port);
});

// app.get("/", function (req, res) {
//   var randomIndex = Math.floor(Math.random()*bandNames.length);
//   res.send(bandNames[randomIndex]);
// });

app.get("/quote", function (req, res) {
  var randomIndex = Math.floor(Math.random()*quotes.length);
  res.send(quotes[randomIndex]);  // returning text
});

app.post("/adjective", function (req, res) {
  res.json( postWord(req.body.word, adjective));
});

app.post("/noun", function (req, res) {
  noun[req.body.word] = true;
});

app.post("/verb", function (req, res) {
  verb[req.body.word] = true;
})

app.get("/adjective", function (req, res) {
  var randomIndex = Math.floor(Math.random()*adjectives.length);
  res.json( { "word": adjectives[randomIndex] });  // returning a JSON objective
});

app.get("/noun", function (req, res) {
  var randomIndex = Math.floor(Math.random()*nouns.length);
  res.json( { "word": nouns[randomIndex] });
});

app.get("/verb", function (req, res) {
  var randomIndex = Math.floor(Math.random()*verbs.length);
});

function postWord (word, wordObject) {
  var msg;
  if (wordObject.hasOwnProperty(word)) {
    msg = "We already have your awesome word, ";
  } else {
    wordObject[word] = true;
    msg = "We saved the awesome word: ";
  return { message: msg, confirm: word };
}
