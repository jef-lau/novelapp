// count chracters
$(document).ready(function() {
    var text_max = 1500;
    $('#textarea_feedback').html(text_max + ' characters remaining');

    $('#comment').keyup(function() {
        var text_length = $('#comment').val().length;
        var text_remaining = text_max - text_length;

        $('#textarea_feedback').html(text_remaining + ' characters remaining');
    });
});


function checkEmpty() {
	var text_length = $('#comment').val().length;
	if (text_length == 0) {
		console.log(text_length);
		document.getElementById("check").innerHTML = "Hey, you didn't write anything.";
		document.getElementById("titleCheck").innerHTML = "Uh Oh!";
		document.getElementById("buttonCheck").innerHTML = "Back";
		document.getElementById("buttonCheck2").style.visibility = "hidden";

		
	}
	else {
		console.log("test");
		document.getElementById("check").innerHTML = "Once your pilcrow is submitted, you can't edit it anymore.";
		document.getElementById("titleCheck").innerHTML = "Are you sure?";
		document.getElementById("buttonCheck").innerHTML = "No! One more thing!";
		document.getElementById("buttonCheck2").style.visibility = "visible";	

	}
}


 if (jQuery.isEmptyObject(data))
    {
       console.log("Empty Object");
    }