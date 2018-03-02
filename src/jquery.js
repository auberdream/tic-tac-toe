$( document ).ready(function() {

  var player1 = true

  function changePlayer () {
    player1 === true ? player1 = false : player1 = true
  }

  function returnPlayer () {
    return (player1 === true ? "X" : "O")
  }

  $(".howto-button").click(function() {
    $("p").slideToggle("slow");
  });

  $("#one").click(function() {
    $("#one").html(returnPlayer());
    changePlayer();
  });

  $("#two").click(function() {
    $("#two").html(returnPlayer());
    changePlayer();
  });

  $("#three").click(function() {
    $("#three").html(returnPlayer());
    changePlayer();
  });

  $("#four").click(function() {
    $("#four").html(returnPlayer());
    changePlayer();
  });

  $("#five").click(function() {
    $("#five").html(returnPlayer());
    changePlayer();
  });

  $("#six").click(function() {
    $("#six").html(returnPlayer());
    changePlayer();
  });

  $("#seven").click(function() {
    $("#seven").html(returnPlayer());
    changePlayer();
  });

  $("#eight").click(function() {
    $("#eight").html(returnPlayer());
    changePlayer();
  });

  $("#nine").click(function() {
    $("#nine").html(returnPlayer());
    changePlayer();
  });


});
