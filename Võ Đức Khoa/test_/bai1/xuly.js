var $ = function(id){
    return document.getElementById(id);
}
var validate = function(value){
    return (value.trim() == '' || value < 0 || isNaN(value)) ? false : true;
}
$('submit').onclick = function(){
    var sale =parseFloat( $('sale').value).toFixed(2);
    var salary;
    var tax;
    var check = validate(sale);
    if(check){
        if(sale < 5000){
            salary = sale*0.05;          
        }
        else if(sale >= 5000 && sale <=10000){
            salary = sale*0.1
        }
        else{
            salary = sale*0.15        
        }
        tax = salary > 1000 ? 10 : 0;
        $('salary').value = parseFloat(salary).toFixed(2);
        $('tax').value = tax + '%';
        var total = salary - salary*(tax/100);
        $('total').value  = parseFloat(total).toFixed(2);
    }
    else alert('Error');
}
