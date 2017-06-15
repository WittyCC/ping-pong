//business logic
var countArray = [];
var output;

function countPingPong(userInput) {
  if (userInput > 0) {
    for (var i = 1; i <= userInput; i++) {
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
  } else {
    alert("Please enter a number greater than 0.");
  }
}

//user interface logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    $("#numberInput").empty();
    $("#countOutput").empty();

    var userInput = parseInt($("input#numberInput").val());
    
    countPingPong(userInput);

    countArray.forEach(function(output) {
      $("#countOutput").append("<li>" + output + "</li>");
    });

    $("input#numberInput").val("");

  });
});
