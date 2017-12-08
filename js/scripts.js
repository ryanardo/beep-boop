// BACK END LOGIC
var beepBoop = function(number) {

}
//Global variables, functions, and arrays.
var num;
var numString;
var numReplaced;
var numbers = [];
var numbersArchive = [];
var newArray = [];
var otherArray = [];
var zero = 0;
var one = 1;

// SPEC 1: It can count up to the provided number.
var countUp =  function(num) {
  numbers.length = 0;
  for(i=0; i <= num; i++) {
    numbers.push(i);
    numbersArchive.push(i);
  };
  console.log("countUp: numbers["+numbers+"]");
  return numbers;
}; // End of 'countUp' function.
// SPEC 6: It can replace a value with another value.
var replaceValue = function(num) {
  if (hasZero(num) === true) {
    var numReplaced = "'Beep!'"
    console.log("replace "+num+" with "+numReplaced);
    otherArray.push(numReplaced);
    return numReplaced;
  } else if (hasOne(num) === true) {
    var numReplaced = "'Boop!'"
    console.log("replace "+num+" with "+numReplaced);
    otherArray.push(numReplaced);
    return numReplaced;
  } else if (divisibleByThree(num) === true) {
    var numReplaced = "I'm sorry, Dave. I'm afraid I can't do that."
    console.log("replace "+num+" with '"+numReplaced+"'");
    otherArray.push(numReplaced);
    return numReplaced;
  } else {
    console.log(num+" does not contain either the digits 0 or 1, and is not divisible by 3.");
    otherArray.push(numReplaced);
    return num;
  }
}; // End of 'replaceValue' function.


// SPEC 7: START
// SPEC 7: Create an array of numbers




// SPEC 7: END

//////////////////////////////////////////////////////////
// START: COMPLETED SPECS
//////////////////////////////////////////////////////////
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
// SPEC 5: Can determine whether or not the user number value is a number.
var isNumber =  function(num) {
  if (num === NaN) {
    console.log(num+" (Not a Number).");
    return true;
  } else {
    console.log(num+" is a number.");
  }
}
//////////////////////////////////////////////////////////
// END: COMPLETED SPECS
//////////////////////////////////////////////////////////
// FRONT END LOGIC
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("#input1").val());
    var numString = $("#input1").val();
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
    //TEST: isNumber
    var isNumberTest = isNumber(num);
    //TEST: replaceValue
    var replaceValueTest = replaceValue(num);
    //TEST: testArray0
    var testArray0 = numbers.map(function(num) {
      $("#output1").append("<li>" + replaceValue(num) + "</li>");
        return replaceValue(num);
        console.log("testArray0["+testArray2+"]");

    });

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
*/

  }); //End of 'form submit' listener.
}); // End of 'document.ready' listener.
