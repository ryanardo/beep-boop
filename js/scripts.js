// BACK END LOGIC
var num;
var numArray = [];
var convertArray = [];
var beep = "Beep!";
var boop = "Boop!";
var dave = "I'm sorry, Dave. I'm afraid I can't do that.";
var numbers = function(num) {
  for(i = 0; i <= num; i++) {
    if (i % 3 == 0 && i.toString().includes("1") && i.toString().includes("0")) {
      $("#output1").append("<li class='list-group-item'>"+i+"</li>");
      $("#output2").append("<li class='list-group-item'>"+beep+" "+boop+" "+dave);
      numArray.push(i);
      convertArray.push(beep+" "+boop+" "+dave);
      console.log(i+" All Criteria met!");
    } else if (i % 3 === 0 && i.toString().includes("1")) {
      $("#output1").append("<li class='list-group-item'>"+i+"</li>");
      $("#output2").append("<li class='list-group-item'>"+beep+" "+dave+"</li>");
      numArray.push(i);
      convertArray.push(beep+" "+dave);
      console.log(i+" contains a One AND is divisible by 3.");
    } else if (i % 3 === 0 && i.toString().includes("0")) {
      $("#output1").append("<li class='list-group-item'>"+i+"</li>");
      $("#output2").append("<li class='list-group-item'>"+boop+" "+dave+"</li>");
      numArray.push(i);
      convertArray.push(boop+" "+dave);
      console.log(i+" contains a One AND is divisible by 3.");
    } else if ((i.toString().includes("0")) && (i.toString().includes("1"))) {
      $("#output1").append("<li class='list-group-item'>"+i+"</li>");
      $("#output2").append("<li class='list-group-item'>"+beep+" "+boop+"</li>");
      numArray.push(i);
      convertArray.push(beep+" "+boop);
      console.log(i+" contained a Zero AND a One.");
    } else if (i.toString().includes("0")) {
      $("#output1").append("<li class='list-group-item'>"+i+"</li>");
      $("#output2").append("<li class='list-group-item'>"+beep+"</li>");
      numArray.push(i);
      convertArray.push(beep);
      console.log(i+" contained a Zero value.");
    } else if (i.toString().includes("1")) {
      $("#output1").append("<li class='list-group-item'>"+i+"</li>");
      $("#output2").append("<li class='list-group-item'>"+boop+"</li>");
      numArray.push(i);
      convertArray.push(boop);
      console.log(i+" contained a One value.");
    } else if (i % 3 === 0) {
      $("#output1").append("<li class='list-group-item'>"+i+"</li>");
      $("#output2").append("<li class='list-group-item'>"+dave+"</li>");
      numArray.push(i);
      convertArray.push(dave);
      console.log(i+" was divisible by Three.");
    } else {
      $("#output1").append("<li class='list-group-item'>"+i+"</li>");
      $("#output2").append("<li class='list-group-item'>"+i+"</li>");
      numArray.push(i);
      convertArray.push(i);
      console.log(i+" met NONE of the Criteria.");
    }
  }; // End of the 'for-loop'.
}; // End of 'numbers' function.

// FRONT END LOGIC
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    $(".list-group-item").remove();
    var num = parseInt($("#input1").val());
    var results = numbers(num);
  }); //End of 'form submit' listener.
}); // End of 'document.ready' listener.
