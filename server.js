var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Server started on port ' + port);
});

app.get("/", function(req, res) {
  res.send("Hello Universe!");
});

var quotes = ["I like dogs.", "I hate cats.", "Death to penguins.", "Birds are noisy."];

app.get("/quote", function (req, res) {
  var randomIndex = Math.floor(Math.random()*quotes.length);
  res.send(quotes[randomIndex]);  // returning text
});

var adjectives = ['pretty', 'ugly', 'dumb', 'smart', 'witty'];

app.get("/adjective", function (req, res) {
  var randomIndex = Math.floor(Math.random()*adjectives.length);
  res.json( { "word": adjectives[randomIndex] })   // returning a JSON objective
})
