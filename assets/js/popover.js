/* when '?' is clicked next to input fields to provide further information on what to enter*/
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });


/* hover feature for FAQ button on homepage */
function hoverFaq() {
  document.getElementById('faqhover').style.backgroundColor='#CF9D3F';
}

function hoverFaqOut() {
  document.getElementById('faqhover').style.backgroundColor='#D7AF4D';
}

