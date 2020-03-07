
var $ = function(id){
    return document.getElementById(id);
}

function xuly(){
    var sales = $("sales").value;
    
    if(!isNaN(sales)){
        var salary = kiemTra_sales(sales);
        var personal = (salary >= 1000) ? 0.1 : 0;
        var total = salary - salary*personal;
        $("salary").value = salary;
        $("personal").value = personal;
        $("total").value = total;
    }
}

function kiemTra_sales(sales){
    if(sales < 5000){
        return 0.05*sales;
    }
    else if(sales >= 5000 && sales <= 10000){
        return 0.1*sales;
    }
    else if(sales > 10000){
        return 0.15*sales;
    }
}


$("submit").onclick = function(){
    xuly();
}

$("clear").onclick = function(){
    $("sales").value = 0;
    $("salary").value = 0;
    $("personal").value = 0;
    $("total").value = 0;
}