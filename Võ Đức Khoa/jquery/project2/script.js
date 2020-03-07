var json = "[{\"id\":0,\"address\":[\"ĐN\",\"QB\"]},{\"id\":1,\"address\":[\"JP1\",\"JP2\"]}]";
var obj = JSON.parse(json);
$("#country").change(function(){
	$("#address").empty();
	var v_op = $("#country").val(); // empty, 0 or 1
	if(v_op != "") {
		let arr_adress = obj[v_op].address;
		// Loop arr, create option
		var option = "";
		for(let i = 0; i < arr_adress.length ; i++) {
			option = "<option value=\"" + i +"\">" + arr_adress[i] + "</option>";
			$("#address").append(option);
		}
		
	}
});

var user = function(name, mail,  pass,
 					 bith,  phone,  country, address){
	this.name = name;
	this.mail = mail;
	this.pass = pass;
	this.bith = bith;
	this.phone = phone;
	this.country = country;
	this.address = address;
}
// validate
$("#form_sign").validate({
	rules : {
		pass : {
			required : true,
			minlength : 8
		},
		re_pass : {
			equalTo : "#pass"
		}
	}, 
	messages : {
		pass : {
			require : "input pass",
			minlength : jQuery.validator.format("Min is {0}")
		},
		re_pass : {
			equalTo : "Not same"
		}
	}
})




$("#sign_up").click(function(){
	if($("#form_sign").valid()) {

	}
});

