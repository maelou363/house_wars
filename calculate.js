var income = document.getElementById('num1');
var debt = document.getElementById('num2');
var result = document.getElementById('results');
var form = document.getElementById('inputform');

form.addEventListener('submit', function(event) {
    if (!num1.value || !num2.value) {
        alert("Please enter both income and debt");
    } else {
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);

        var result = (x - y) * 3.5;
        results.innerText="You can potentially borrow: "+result;
        event.preventDefault();

    }
});