
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
        if (checkValue()) {
            var amount = parseFloat($("amount").value);
            var rate = parseFloat($("rate").value);
            var year = parseFloat($("year").value);
            if(year != 0) {
                for (let i = 1; i <= year; i++) {
                    amount += amount * rate;
                }
            }
        }
        $("value").value = amount;
    };
}
