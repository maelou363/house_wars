var income = document.getElementById('num1');
var debt = document.getElementById('num2');
var result = document.getElementById('results');
var form = document.getElementById('inputform');

/* Will show results section upon calculation button clicked */
$('.submit').click(function() {
    $('.resultssection').toggle();
});

/* function to allow 1/10th second to work around bug that otherwisee it won't auto scroll to results every time*/
let hw = document.querySelector('.resultssection');

function getFocus() {
    hw.scrollIntoView({ 
        behavior: 'smooth' 
    });
}

/* function to add commas in between printed numbers from
https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* when typing numbers in input form will automatically add commas */
$('input.number').keyup(function(event) {

    // skip for arrow keys
    if(event.which >= 37 && event.which <= 40) return;
  
    // format number
    $(this).val(function(index, value) {
      return value
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      ;
    });
  });

/* Calculations to get personalised mortgage results */

form.addEventListener('submit', function(event) {
    event.preventDefault();
    /* checking that valid values have been entered */
    if (!num1.value || !num2.value) {
        alert("Please enter both income and debt");
        $('.resultssection').css('display', 'none');
    } else {
        var x = parseFloat(num1.value.replace(/,/g, ''));
        var y = parseFloat(num2.value.replace(/,/g, ''));

/* results section from input */
        /* Calculation for initial borrowing based on income and debt */
        var result = (x - y) * 3.5;
        results.innerText= "€"+numberWithCommas(result);

        /* placing results value into sending personalise results form */
        document.getElementById('person_results').value = numberWithCommas(result);

        /* Calculation for how much would need to be put down with 20% */
        var mortgdeposit = result*.20;
        deposit.innerText="€"+numberWithCommas(mortgdeposit);

        /* placing results value into sending personalise results form */
        document.getElementById('deposit_needed').value = numberWithCommas(mortgdeposit);

        /* Calculation adding deposit and results together for total buying power */
        var totalmortg = result + mortgdeposit;
        buyingpower.innerText="€"+numberWithCommas(totalmortg);

        /* placing results value into sending personalise results form */
        document.getElementById('buyer_total').value = numberWithCommas(totalmortg);

    }
});

