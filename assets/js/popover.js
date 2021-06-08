/* when '?' is clicked next to input fields to provide further information on what to enter*/
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    $("#questionpopover").popover({ trigger: "hover" });
  });


/* hover feature for FAQ button on homepage */
function hoverFaq() {
  document.getElementById('faqhover').style.cssText = "background-color:#C2DEFF; transition: 0.4s;";
}

function hoverFaqOut() {
  document.getElementById('faqhover').style.backgroundColor='#D6D9E1';
}

