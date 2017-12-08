// BACK END LOGIC
var beepBoop = function(number) {
}

//Global variables, functions, and arrays.
var num;
var numArray = [];
var zero = 0;
var one = 1;

// SPEC 1: It can count up to the provided number.
var countUp =  function(num) {
  for(i=0; i <= num; i++) {
    numArray.push(i)
  };
  console.log("countUp: numArray["+numArray+"]");
}; // End of 'countUp' function.

// FRONT END LOGIC
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("#input1").val());
    var numArray = [];
    var results = beepBoop(num);
    $("#output1").text(results);

    //countUp
    var countUp1 = countUp(num);
  }); //End of 'form submit' listener.
}); // End of 'document.ready' listener.
