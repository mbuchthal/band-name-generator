'use strict';

$(function() {

  $('#submitWordAdjective').on('submit', function(event) {
    event.preventDefault();
    var userAdjective = $('#user-adjective').val();
    $.post('/adjective', {word: userAdjective}, function(response) {
      var confirm = response.message + ' <em>' + response.confirm + '</em>';
      $('#res-adjective').html(confirm);
    });

    $('#user-adjective').val('');
  });

  $('#submitWordNoun').on('submit', function(event) {
    event.preventDefault();
    var userNoun = $('#user-noun').val();
    $.post('/noun', {word: userNoun}, function(response) {
      var confirm = response.message + ' <em>' + response.confirm + '</em>';
      $('#res-noun').html(confirm);
    });

    $('#user-noun').val('');
  });

  $('#submitWordVerb').on('submit', function(event) {
    event.preventDefault();
    var userVerb = $('#user-verb').val();
    $.post('/verb', {word: userVerb}, function(response) {
      var confirm = response.message + ' <em>' + response.confirm + '</em>';
      $('#res-verb').html(confirm);
    });

    $('#user-verb').val('');
  });

  $('#button').on('click', function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      var adjCap = adjective.charAt(0).toUpperCase() + adjective.slice(1);
      $('#adjective').text(adjCap);
    });

    $.get('verb', function(response) {
      var verb = response.word;
      $('#verb').text(verb);
    });

    $.get('noun', function(response) {
      var noun = response.word;
      $('#noun').text(noun);
    });

  });

  $('#buttonone').on('click', function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      var adjCap = adjective.charAt(0).toUpperCase() + adjective.slice(1);
      $('#adjective').text(adjCap);
    });

  });

  $('#buttontwo').on('click', function() {
    $.get('noun', function(response) {
      var noun = response.word;
      $('#noun').text(noun);
    });

  });

  $('#buttonthree').on('click', function() {
    $.get('verb', function(response) {
      var verb = response.word;
      $('#verb').text(verb);
    });

  });

});
