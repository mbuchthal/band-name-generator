var express = require("express");
var bodyParser = require('body-parser');
var getRandomWord = require('./lib/getRandomWord');
var adjective = require('./lib/adjective');
var noun = require('./lib/noun');
var verb = require('./lib/verb');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(port, function() {
  console.log('Server started on port ' + port);
});

// app.get("/quote", function (req, res) {
//   var randomIndex = Math.floor(Math.random()*quotes.length);
//   res.send(quotes[randomIndex]);  // returning text
// });

app.post("/adjective", function (req, res) {
  adjective[req.body.word] = true;
  res.json( postWord(req.body.word, adjective));
});

app.post("/noun", function (req, res) {
  noun[req.body.word] = true;
  res.json( postWord(req.body.word, noun));
});

app.post("/verb", function (req, res) {
  verb[req.body.word] = true;
  res.json( postWord(req.body.word, verb));
})

app.get("/adjective", function (req, res) {
  res.json(getRandomWord(adjective));  // returning a JSON objective
});

app.get("/noun", function (req, res) {
  res.json(getRandomWord(noun));
});

app.get("/verb", function (req, res) {
  res.json(getRandomWord(verb));
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
};

