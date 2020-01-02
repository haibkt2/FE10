var $ = function(id){
    return document.getElementById('id');
}
var validate = function(){
    var sale = $('sale').value;
    return (sale.trim() == '' || sale < 0 || isNaN(sale)) ? false : true;
}
$('submit').onclick = function(){
    var sale =parseFloat( $('sale').value).toFixed(2);
    var salary = $('salary').value;
    var tax = $('tax').value;
    var check = validate(sale);
    if(check){
        if(sale < 5000){
            salary = sale*(5/100);
            tax = salary > 1000 ? 10 + '%' : 0+ '%';
        }
        else if(sale > 5000 && sale <10000){
            salary = sale*(10/100);
            tax = salary > 1000 ? 10 + '%' : 0+ '%';
        }
        else{
            salary = sale*(15/100);
            tax = salary > 1000 ? 10 + '%' : 0+ '%';
        }
    }
    else alert('Error');
    if(check){
        var salary =parseFloat( $('salary').value).toFixed(2);
        var tax = $('tax').value;
        var total = salary - salary*tax;
        $('total').value  = parseFloat(total).toFixed(2);
    }
    else alert('Error');
}
$('reset').onclick = function(){
     $('sale').value = '';
     $('salary').value = '';
     $('tax').value = '';
}