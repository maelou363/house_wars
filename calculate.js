var income = document.getElementById('num1');
var debt = document.getElementById('num2');
var result = document.getElementById('results');
var form = document.getElementById('inputform');

/* function to add commas in between printed numbers from
https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


form.addEventListener('submit', function(event) {
    if (!num1.value || !num2.value) {
        alert("Please enter both income and debt");
    } else {
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);

        var result = (x - y) * 3.5;
        results.innerText="You can potentially borrow: €"+numberWithCommas(result);
        var mortgdeposit = result*.20;
        deposit.innerText="You deposit needs to be: €"+numberWithCommas(mortgdeposit);
        var totalmortg = result + mortgdeposit;
        buyingpower.innerText="Your total buying power is: €"+numberWithCommas(totalmortg);
        event.preventDefault();

    }
});