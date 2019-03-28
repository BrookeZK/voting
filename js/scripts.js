$(document).ready(function() {
  var age = parseInt(prompt("Enter your age"));

  if (age < 18) {
    $("#underage").show();
  } else {
    $("#ofAge").show();
  }
});
