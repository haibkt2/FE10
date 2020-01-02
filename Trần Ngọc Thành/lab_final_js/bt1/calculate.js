var $ = function(id) {
    return document.getElementById(id);
};
var checkValue = function(value) {
    if (isNaN(value) || value < 0) {
        alert("input number > 0");
        return false;
    }
    else return true;
};
$("summit").onclick = function() {
    var sales = $("sale").value;
    var salary = 0, tax = 0, total = 0;
    if (checkValue(sales)) {
        if (sales < 5000) {
            salary = sales * 0.05;
        }
        else if (sales >= 5000 && sales >= 10000) {
            salary = sales * 0.1;
        }
        else {
            salary = sales * 0.15;
        }
        $("sal").value = salary;
        if (salary >= 1000) {
            tax = 0.1;
        }
        else tax = 0;
        $("tax").value = tax * 100;
        total = salary - salary * tax;
        $("total").value = total.toLocaleString();
    }
    else alert("error!!");
}