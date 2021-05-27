/* reset input form to enter in new numbers */
function resetValue() {
    document.getElementById("inputform").reset();
/* Potential reset to reset entire form */
    // document.getElementById("results_send").reset();
 }

/* resets results section and hides previous results when reset button is hit */ 
$('.resetbutton').click(function() {
    $('.resultssection').css('display', 'none');
});

/* resets results section and hides previous results when reset modal button is hit */ 
$('.resetbuttonmodal').click(function() {
    $('.resultssection').css('display', 'none');
});