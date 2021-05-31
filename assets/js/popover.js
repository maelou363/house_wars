/* when '?' is clicked next to input fields to provide further information on what to enter*/
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });


/* hover feature for FAQ button on homepage */
function hoverFaq() {
  document.getElementById('faqhover').style.cssText = "background-color:#0063CC; transition: 0.4s; color: #fffff;";
}

function hoverFaqOut() {
  document.getElementById('faqhover').style.backgroundColor='#D6D9E1';
}

