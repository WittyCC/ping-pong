$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#numberInput").val());
    var countArray = [];
    var output;
    for (var i = 1; i <= userInput; i++) {
      //countArray.push(output)
      output = '';
      if (i % 3 === 0 && i % 15 !== 0) {
        output += "PING!";
      }
      if (i % 5 === 0 && i % 15 !== 0) {
        output += "PONG!";
      }
      if (i % 3 === 0 && i % 5 ===0 && i % 15 === 0) {
         output += "PING-PONG!";
      }
      if (output === '') {
        output +=i;
      }
      countArray.push(output);
    }
    countArray.forEach(function(output) {
      $("#countOutput").append("<li>" + output + "</li>");
    });
  });
});
