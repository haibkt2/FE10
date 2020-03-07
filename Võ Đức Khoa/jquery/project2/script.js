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
$("#sign_up").click(function(){
	if($("#form_sign").valid()) {
		// get info user
		var name = $("#name").val(),
		 pass = $("#pass").val(),
		 mail = $("#mail").val(),
		 bith = $("#bithday").val(),
		 phone  = $("#phone").val(),
		 country  = $("#country").val(),
		 address  = $("#address").val();
		// create obj user
		var user = new user(name, mail,  pass,
 					 bith,  phone,  country, address);
		// register user
		// convert object to json
		var json = JSON.stringify(user);
		// save local
		localStorage.setItem(name, json);
	}
});
$("#login").click(function(){
	// validate
	if($("#form_login").valid()) {
		// Get value input
		var name = $("#name").val(),
		 pass = $("#pass").val();
		// Get data user, check login of user
		var user_json = localStorage.getItem(name);
		if(user_json == null) {
			alert("user or pass is wrong");
		} else {
			// check pass
			// convert json to object
			var user = JSON.parse(user_json);
			var pass_infon = user.pass;
			if(pass == pass_infon) {
				alert("OK")
			} else {
				alert("user or pass is wrong");
			}
		}
		
	}
});

