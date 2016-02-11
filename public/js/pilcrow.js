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



 if (jQuery.isEmptyObject(data))
    {
       console.log("Empty Object");
    }