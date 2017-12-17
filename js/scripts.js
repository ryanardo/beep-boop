/**BACK END LOGIC**/
var num;
var numArray = [];
var convertArray = [];
var beep = "Beep!";
var boop = "Boop!";
var dave = "I'm sorry, Dave. I'm afraid I can't do that.";
// Create array of numbers starting at 0.
var numbers = function(num) {
  for (i = 0; i <= num; i++) {
    numArray.push(i);
    if (i.toString().includes("0")) {
      convertArray.push(beep);
    } else if (i.toString().includes("1")) {
      convertArray.push(boop);
    } else if (i % 3 === 0) {
      convertArray.push(dave);
    } else {
      convertArray.push(i);
    }
  }; // End of the 'for-loop'.
}; // End of 'numbers' function.
/**FRONT END LOGIC**/
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("#input1").val());
    $(".list-group-item").remove();
    // Push 'numArray' items to list
    var numArrayList = function(numArray) {
      for(i = 0; i < numArray.length; i++) {
        $("#output1").append("<li class='list-group-item'>"+numArray[i]+"</li>");
      }; // End of the 'numArrayList' for-loop.
    }; // End of 'numArrayList' function
    // Push 'convertArray' items to list.
    var convertArrayList = function(convertArray) {
      for(i = 0; i < convertArray.length; i++) {
        $("#output2").append("<li class='list-group-item'>"+convertArray[i]+"</li>");
      }; // End of the 'convertArrayList' for-loop.
    }; // End of the 'convertArrayList' function.
    // Call functions to display data.
    numbers(num);
    numArrayList(numArray);
    convertArrayList(convertArray);
  }); //End of 'form submit' listener.
}); // End of 'document.ready' listener.
