$(function() {

  $("#submitWordAdjective").on('submit', function (event) {
    event.preventDefault();
    var userAdjective = $("#user-adjective").val();
    $.post("/adjective", {word: userAdjective}, function() {
      var confirm = response.message + " <em>" + response.confirm + "</em>";
      $("#res-adjective").html(confirm);
    });
  });

  $("#submitWordNoun").on('submit', function (event) {
    event.preventDefault();
    var userNoun = $("#user-noun").val();
    $.post("/noun", {word: userNoun}, function() {
      var confirm = response.message + " <em>" + response.confirm + "</em>";
      $("#res-noun").html(confirm);
    });
  });

  $("#submitWordVerb").on('submit', function (event) {
    event.preventDefault();
    var userVerb = $("#user-verb").val();
    $.post("/verb", {word: userVerb}, function() {
      var confirm = response.message + " <em>" + response.confirm + "</em>";
      $("#res-verb").html(confirm);
    })
  });

  $('#buttonone').on('click', function() {
    $.get("/adjective", function (response) {
      $('#adjective').html(response.word);
    });
  })

  $('#buttontwo').on('click', function() {
    $.get("/noun", function (response) {
      $('#noun').html(response.word);
    });
  })

  $('#buttonthree').on('click', function() {
    $.get("/verb", function (response) {
      $('#verb').html(response.word);
    });
  })

});
