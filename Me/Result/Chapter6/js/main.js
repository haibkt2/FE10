var $ = function(id){
	return document.getElementById(id);
}
var validateValue = function(value){
		var check =  (isNaN(value) 
			|| parseFloat(value) < 0 
			|| value.trim() == '') ? false : true;
		return check;
}
$("customer").onchange = function(){
	var customer = $("customer").value;
	var check = validateValue(subtotal);
	$("amount").disabled = customer == 'other' ? false : true;
}
$("cal").onclick = function(){
	var customer = $("customer").value;
	var subtotal = $("subtotal").value;
	// validate subtotal
	var check = validateValue(subtotal);
	var percent = 0, amount = 0;
	if(check) {
		subtotal = parseFloat(subtotal).toFixed(2);
		// case subtotal < 1000
		if(subtotal < 10000) {
			percent = 0.1;
			$("amount").disabled = true;
		} else { // case subtotal >= 1000
			// case customer : Lay
			if(customer == '200'){
				amount = 200;
				percent = subtotal < 15000 ? 0.1 : 0.15;
			
			}// case customer : Honer
			else if(customer == '300') {
				amount = 300;
				percent = subtotal < 15000 ? 0.15 : 0.2;
			} // case customer : other
			else {
				var amount_input = $("amount").value;
				// validate amount
				check = validateValue(amount_input);
				if(check && amount_input < 500) {
					percent = 0.15;
					amount = parseFloat(amount_input).toFixed(2);
				}
			}
		}
		// caculate total
		// display amount, percent, total
	}
	if(check) {
		total = subtotal * percent - amount;
		$("total").value = parseFloat(total.toFixed(2));
		$("percent").value = percent*100;
		$("amount").value = amount;
	} else {
		alert("Error");	
	}
}