$(function() {

  $("form").on('submit', function (event) {
    event.preventDefault();
    var userAdjective = $("#user-adjective").val();
    $.post("/adjective", {word: userAdjective}, function() {
      $("#adjective-res").html(response.message + " <em>" + response.confirm + "</em">);
    })
  });

  $('#buttonone').on('click', function() {
    $.get("/adjective", function(response) {
      $('#adjective').html(response.word);
    });
  })



  $('#buttontwo').on('click', function() {
    $.get("/verb", function(response) {
      $('#verb').html(response.word);
    });
  })



  $('#buttonthree').on('click', function() {
    $.get("/noun", function(response) {
      $('#noun').html(response.word);
    });
  })

});
