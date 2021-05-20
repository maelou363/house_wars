/* reset input form to enter in new numbers */
function resetValue() {
    document.getElementById("inputform").reset();
 }

/* resets results section and hides previous results when reset button is hit */ 
$('.resetbutton').click(function() {
    $('.resultssection').css('display', 'none');
});


