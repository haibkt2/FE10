window.onload = () => {
    var $ = (id) => {
        return document.getElementById(id);
    }
    $("percent").value = 0;
    $("total").value = 0;
    $("amount").value = 0;

    var checkValue = (input) => {
        if (isNaN(input) || input < 0 || input == "") {
            alert("pls input number > 0");
            return false;
        }
        else return true;
    };
    var type = $("type");
    var subtotal = $("subtotal");
    // kết quả  sau khi kết thúc event
    var check = () => {
        if (type.value == "other") {
            if (subtotal.value >= 10000) {
                $("amount").value = "";
                $("amount").removeAttribute("disabled");
                $("amount").setAttribute("placeholder", "Pls input amount");
                $("note").innerHTML = "*";
                $("note").style.color = "red";
                $("percent").value = 15;
            }
            else {
                $("percent").value = 10;
                $("amount").value = 0;
                $("amount").setAttribute("disabled","");
                $("note").innerHTML = "";
            }
        }
        else if (type.value == 200) {
            $("amount").setAttribute("disabled","");
            $("note").innerHTML = "";
            if (subtotal.value < 10000) {
                $("percent").value = 10;
                $("amount").value = 0;
            }
            else if (subtotal.value >= 10000 && subtotal.value < 15000) {
                $("percent").value = 10;
                $("amount").value = type.value;
            }
            else {
                $("percent").value = 15;
                $("amount").value = type.value;
            }
        }
        else if (type.value == 300) {
            $("amount").setAttribute("disabled","");
            $("note").innerHTML = "";
            if (subtotal.value < 10000) {
                $("percent").value = 10;
                $("amount").value = 0;
            }
            else if (subtotal.value >= 10000 && subtotal.value < 15000) {
                $("percent").value = 15;
                $("amount").value = type.value;
            }
            else {
                $("percent").value = 20;
                $("amount").value = type.value;
            }
        }

    };
    // add event cho listbox
    type.addEventListener("change", () => {
        check();
    });
    // add event cho textbox
    subtotal.addEventListener("change", () => {
        if (checkValue(subtotal.value)) {
            check();
        }
    });
    // add event button
    $("cal").addEventListener("click", () => {
        if (type.value == "other") {
            if (isNaN($("amount").value) || $("amount").value > 500 || $("amount").value == "") {
                alert("pls input number > 0 and < 500");
            }
            else {
                $("total").value = parseFloat(subtotal.value) * parseFloat($("percent").value)/100 - parseFloat($("amount").value); 
            }
        }
        else {
            $("total").value = parseFloat(subtotal.value) * parseFloat($("percent").value)/100 - parseFloat($("amount").value);
        }
    });
}