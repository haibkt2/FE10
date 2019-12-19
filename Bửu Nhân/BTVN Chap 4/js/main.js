
window.onload = () => {
    var money = (id) => {
        return document.getElementById(id);
    }
    var checkEmpty = () => {
        if (money("amount").value == "" || money("rate").value == "" || money("year").value == "") {
            alert("Pls input to textbox");
            return false;
        }
        else return true;
    }
    var checkValue = () => {
        if (isNaN(money("amount").value) || isNaN(money("rate").value) || isNaN(money("year").value)) {
            alert("Input a number type");
            return false;
        }
        else return true;
    }
    var checkNumber = () => {
        if (money("amount").value < 0 || money("rate").value < 0 || money("year").value < 0) {
            alert(" input a positive number");
            return false;
        }
        else return true;
    }
    money("calculate").onclick = () => {
        if (checkValue() && checkEmpty() && checkNumber()) {
            var amount = parseFloat(money("amount").value);
            var rate = parseFloat(money("rate").value);
            var year = parseFloat(money("year").value);
            if(year != 0) {
                for (let i = 1; i <= year; i++) {
                    amount += amount * rate / 100;
                }
            }
        }
        else amount = amount;
        money("value").value = amount;
    };
}
