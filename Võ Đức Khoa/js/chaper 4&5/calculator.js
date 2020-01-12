window.onload = function() {
    var $ = function(id) {
        return document.getElementById(id);
    }
    var check = function() {
        if (isNaN($("amount").value) || isNaN($("rate").value) || isNaN($("year").value))
            return false;
        else return true;

    }
    $("cal").onclick = function() {
        var amount = $("amount").value.trim();
        var rate = $("rate").value.trim();
        var year = $("year").value.trim();
        if (amount == '' || rate == '' || year == '' || check() == false || amount < 0 || rate < 0 || year < 0)
            alert("Input wrong , please again");
        else {
            amount = parseFloat(amount).toFixed(2);
            for (let i = 1; i <= year; i++) {

                amount = parseFloat(amount) + parseFloat(amount) * parseFloat(rate);
            }
            $("result").value = amount;
        }
    }
}