var $ = function(id) {
    return document.getElementById(id);
}
var validateValue = function(value){
     var check = (isNaN(value) || value.trim() == '' || value < 0) ? false : true;
     return check; 
}

window.onload = function(){
    $("customer").onchange = function(){
        $("amount").disabled = $("customer").value == "other" ? false : true;
    }
    var calculator = function(){
        $("total").value = parseFloat(subtotal*($("percent").value/100) - $("amount").value).toFixed(4);
    }
    $("calculator").onclick = function(){
          var subtotal = parseFloat($("subtotal").value).toFixed(2);
          var customer = $("customer").value; 
          var check = validateValue(subtotal);
          if(check){
            if(subtotal < 1000) {
                $("amount").value = 0;
                $("percent").value = 10;
            }
            else if(customer == "lay"){
                $("amount").value = 200;
                $("percent").value = subtotal < 1000 ? 10 : 15; 
                }
                 else if(customer == "honer"){
                    $("amount").value = 300;
                    $("percent").value  = subtotal < 1000 ? 15 : 20;  
    
                    }
                     else{
                        var checkamount = validateValue($("amount").value);
                       if(checkamount && $("amount").value < 500){
                        $("percent").value = 15;
                       } 
                       else alert("error");
                     }
    $("total").value = parseFloat(subtotal*($("percent").value/100) - $("amount").value).toFixed(4);          
          }
          else alert("error");
    }
    
    
}