'use strict';

module.exports = function (object) {
  var propArray = Object.keys(object);
  var randomProp =  propArray[Math.floor(Math.random() * propArray.length)];
  console.log(propArray);
  return {word: randomProp};

};
