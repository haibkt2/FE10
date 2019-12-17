
window.onload = () => {
    var $ = (id) => {
        return document.getElementById(id);

    }
    var checkValue = () => {
        if (isNaN($("amount").value) || isNaN($("rate").value) || isNaN($("year").value)) {
            alert("Pls input number");
            return false;
        }
        else return true;
    }
    $("cal").onclick = () => {
        var amount = parseFloat($("amount").value);
        var rate = parseFloat($("rate").value);
        var year = parseFloat($("year").value);
        var value = 0;
        if (checkValue()) {
            if(year != 0) {
                value = amount + amount * rate;
                for (let i = 2; i <= year; i++) {
                    value += value * rate;
                }
            }
        }
        $("value").value = value;
    };


}
