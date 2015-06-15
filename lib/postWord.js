'use strict';

module.exports = function (word, wordObject) {
// function postWord (word, wordObject) {
  var msg;
  if (wordObject.hasOwnProperty(word)) {
    msg = "We already have your awesome word, ";
  } else {
    wordObject[word] = true;
    msg = "We saved the awesome word: ";
  return { message: msg, confirm: word };
  }
};
