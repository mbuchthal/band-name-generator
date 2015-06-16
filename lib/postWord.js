'use strict';

module.exports = function(word, wordObject) {
  var msg;
  if (wordObject.hasOwnProperty(word)) {
    msg = 'We already have the word, ';
    console.log(msg);
  } else {
    wordObject[word] = true;
    msg = 'We saved the awesome word: ';
  }

  return { message: msg, confirm: word };
};
