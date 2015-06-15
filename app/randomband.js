'use strict';

$(function() {

  $("#submitWordAdjective").on('submit', function (event) {
    event.preventDefault();
    var userAdjective = $("#user-adjective").val();
    $.post("/adjective", {word: userAdjective}, function() {
      var confirm = response.message + " <em>" + response.confirm + "</em>";
      $("#res-adjective").html(response.message + " <em>" + response.confirm + "</em>");
    });
  });

  $("#submitWordNoun").on('submit', function (event) {
    event.preventDefault();
    var userNoun = $("#user-noun").val();
    $.post("/noun", {word: userNoun}, function() {
      var confirm = response.message + " <em>" + response.confirm + "</em>";
      $("#res-noun").text(confirm);
    });
  });

  $("#submitWordVerb").on('submit', function (event) {
    event.preventDefault();
    var userVerb = $("#user-verb").val();
    $.post("/verb", {word: userVerb}, function() {
      var confirm = response.message + " <em>" + response.confirm + "</em>";
      $("#res-verb").text(confirm);
    })
  });

  $('#button').on('click', function() {
    $.get('adjective', function (response) {
      $("#adjective").text(response.word);
    });
    $.get('verb', function (response) {
      $("#verb").text(response.word);
    });
    $.get('noun', function (response) {
      $("#noun").text(response.word);
    });
  });

  $('#buttonone').on('click', function() {
    $.get('adjective', function (response) {
      $('#adjective').text(response.word);
    });
  })

  $('#buttontwo').on('click', function() {
    $.get('verb', function (response) {
      $('#verb').text(response.word);
    });
  })

  $('#buttonthree').on('click', function() {
    $.get('noun', function (response) {
      $('#noun').text(response.word);
    });
  })

});
