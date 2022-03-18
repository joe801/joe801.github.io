$("#login").click(function() {
	alert("Sorry you can't login right now!")
});


function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}


$("#subscribe").click(function() {
	alertt = $("#autoSizingInputGroup").val();

	if (isEmail($("#autoSizingInputGroup").val()) == false) {
		alert("Invalid email adress")
	} else {
		alert(alertt + " has been added to our mailing list")
	}
});

$("#submit").click(function() {
	alert("Your messaged has been recieved, thanks for submitting!");
});