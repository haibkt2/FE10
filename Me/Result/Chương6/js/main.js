var $ = function(id){
	return document.getElementById(id);
}
var validateValue = function(value){
		var check =  (isNaN(value) 
			|| parseFloat(value) < 0 
			|| value.trim() == '') ? false : true;
		return check;
}
$("type").onchange = function(){
	var customer = $("type").value;
	var subtotal = $("subtotal").value;
	// validate subtotal
	var check = validateValue(subtotal);
	if(check && customer == 'other' 
		&& parseFloat(subtotal).toFixed(2) < 1000) {
			$("amount").disabled = true;
	} else {
			$("amount").disabled = false;
	}
}
$("cal").onclick = function(){
	var customer = $("type").value;
	var subtotal = parseFloat($("subtotal").value).toFixed(2);
	// validate subtotal
	var check = validateValue(subtotal);
	var percent = 0, amount = 0;
	if(check) {
		// case subtotal < 1000
		if(parseFloat(subtotal).toFixed(2) < 10000) {
			percent = '10.00';
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
				var amount_input = $("amount");
				// validate amount
				check = validateValue(amount_input);
				if(check && amount_input < 500) {
					percent = 0.15;
					amount = parseFloat("amount");
				}
			}
		}
		// caculate total
		// display amount, percent, total
		if(check) {
			total = subtotal * percent - amount;
			$("total").value = total;
			$("percent").value = percent;
			$("amount").value = amount;
		} else {
			alert("Error");	
		}
	}
}