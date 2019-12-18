
window.onload = () => {
    var $ = (id) => {
        return document.getElementById(id);
    }
    var checkEmpty = () => {
        if ($("amount").value == "" || $("rate").value == "" || $("year").value == "") {
            alert("Pls input to textbox");
            return false;
        }
        else return true;
    }
    var checkValue = () => {
        if (isNaN($("amount").value) || isNaN($("rate").value) || isNaN($("year").value)) {
            alert("Pls input number");
            return false;
        }
        else return true;
    }
    var checkNumber = () => {
        if ($("amount").value < 0 || $("rate").value < 0 || $("year").value < 0) {
            alert("Pls input to number higher than 0");
            return false;
        }
        else return true;
    }
    $("cal").onclick = () => {
        if (checkValue() && checkEmpty() && checkNumber()) {
            var amount = parseFloat($("amount").value);
            var rate = parseFloat($("rate").value);
            var year = parseFloat($("year").value);
            if(year != 0) {
                for (let i = 1; i <= year; i++) {
                    amount += amount * rate;
                }
            }
        }
        else amount = 0;
        $("value").value = amount;
    };
}
