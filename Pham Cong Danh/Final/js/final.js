var $ = function(id){
	return document.getElementById(id);
}
var validateValue = function(value){
    var check =  (isNaN(value) 
        || parseFloat(value) < 0 
        || value.trim() == '') ? false : true;
    return check;
}

$("clear").onclick = function(){
    $("sales").value = '';
    $("salary").value = '';
    $("tax").value = '';
    $("total").value = '';
}
$("submit").onclick = function(){
    var sales = $("sales").value;
    var check = validateValue(sales);
    var tax = 0, salary = 0;
    if(check){
        sales = parseFloat(sales).toFixed(2);
        if(sales < 5000) {
			salary = 0.05*sales;
        }
        else if(sales <= 10000){
            salary = 0.1*sales;
        }
        else{
            salary = 0.15*sales;
        }
    }
    if(salary>=1000){
        tax = 0.1;
    }
    if(check) {
        total = salary - salary*tax;
        $("total").value = parseFloat(total.toFixed(2));
        $("tax").value = tax*100 + '%';
        $("salary").value = parseFloat(salary.toFixed(2));
    }
    else{
        alert("Please input positive number into Sales field!!...");
        $("sales").value = '';
    }
}
