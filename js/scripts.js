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
  return false;
}; // End of 'countUp' function.
// SPEC 2: Can determine if a number has a 0 in it.
var hasZero = function(num) {
  if (num.toString().match(zero)) {
    console.log(num+" contains 0 value in it.");
    return true;
  } else {
    console.log(num+" does NOT contain a 0 value.");
    return false;
  }
}; // End of 'hasZero' function.
// SPEC 3: Can determine if a number has a 1 in it.
var hasOne = function(num) {
  if (num.toString().match(one)) {
    console.log(num+" contains 1 value in it.");
    return true;
  } else {
    console.log(num+" does NOT contain a 1 value.");
    return false;
  }
}; //End of 'hasOne' function.
// SPEC 4: Program can divide a number by 3.
var divisibleByThree = function(num) {
  if (num % 3 === 0) {
    console.log(num+" is divisible by 3");
    return true;
  } else {
    console.log(num+" is NOT divisible by 3");
    return false;
  }
}; // End of 'divisibleByThree' function.

// FRONT END LOGIC
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("#input1").val());
    var numArray = [];
    var results = beepBoop(num);
    $("#output1").text(results);

    //TEST: countUp
    var countUp_Test = countUp(num);
    //TEST: hasZero
    var hasZero_Test = hasZero(num);
    //TEST: hasOne
    var hasOne_Test = hasOne(num);
    //TEST: divisibleByThree
    var divisibleByThree_Test = divisibleByThree(num);

/* TEST FUNCTION TEMPLATES
    //TEST: function_name
    var function_name Test = function_name(num);
    //TEST: function_name
    var function_name Test = function_name(num);
    //TEST: function_name
    var function_name Test = function_name(num);
    //TEST: function_name
    var function_name Test = function_name(num);
    //TEST: function_name
    var function_name Test = function_name(num);
    //TEST: function_name
    var function_name Test = function_name(num);
    //TEST: function_name
    var function_name Test = function_name(num);
    //TEST: function_name
    var function_name Test = function_name(num);
    //TEST: function_name
    var function_name Test = function_name(num);
*/

  }); //End of 'form submit' listener.
}); // End of 'document.ready' listener.
