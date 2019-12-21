var $ = function(id) {
    return document.getElementById(id);
}
var handl = function() {
    var sel  = $('sel').value;
    if( $('sub').value < 10000 ){
        $('amount').value = 0;
        $('percent').value = 10;
        $('total').value = $('sub').value*0.1 - $('amount').value;
    }
    else if(sel == '1'){
        if($('sub').value < 15000){
            $('amount').value = 200;
            $('percent').value = 10;
            $('total').value = $('sub').value*0.1 - $('amount').value;  
        }
        else{
            $('amount').value = 200;
            $('percent').value = 15;
            $('total').value = $('sub').value*0.15 - $('amount').value;
        }
    }
    else if(sel == '2'){
        if($('sub').value < 15000){
            $('amount').value = 300;
            $('percent').value = 15;
            $('total').value = $('sub').value*0.15 - $('amount').value; 
        }
        else{
            $('amount').value = 300;
            $('percent').value = 20;
            $('total').value= $('sub').value*0.2 - $('amount').value; 
        }
    }
    else{
        $('percent').value = 50;
        $('total').value = $('sub').value*0.5 - $('amount').value;
    }
}
var chon = function(){
    if($('sel').value == '3'){
        $('amount').disabled = false;
    }
    else{
        $('amount').disabled = true;
    }
}
window.onload = function() {
    var calculator = $('cal');
    calculator.onclick = handl;
    var sel = $('sel');
    sel.onchange = chon;
}