$(document).ready(function()) {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var countArray = [];
    var userInput = parseInt($("input#numberInput").val());

    for (var i = 0; i <= userInput; i++) {
      countArray.push(i);
    }

    if (userInput % 3 === 0) {
      return "PING!"
    } else if (userInput % 5 === 0) {
      return "PONG!"
    } else if (userInput % 15 === 0) {
      return "PING-PONG!"
    }

    $("ul").append("<li>countArray</li>");
  })
});
