do{
	var number = prompt("input number: ",);
	if(!isNaN(number)){
			alert("INTERGER = "+parseInt(number));
			alert("FLOAT = "+parseFloat(number));
	}
}while(isNaN(number));