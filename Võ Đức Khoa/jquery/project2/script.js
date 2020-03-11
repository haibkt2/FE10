 // validate
$("#form_sign").validate({
	rules : {
		address : {
           required : true
		},
		phone : {
		   required : true
		},
		bithday : {
		   required : true,
		   date : true
		},
		email : {
		   required : true,
		   email : true
		   
		},
		name : {
            required : true
		},
		pass : {
			required : true,
			minlength : 6
		},
		re_pass : {
			equalTo : "#pass"
		},
		country : {
			required : true
		}
	}, 
	messages : {
		address : {
            required : " chon dia chi"
		},
		country : {
			required : "hay chon quoc gia"
		},
		phone : {
         required : "hay nhap so phone"
		},
		bithday : {
		  required: "nhap di",
		  date : "nhap dung theo mau"
		},
		email : {
		  required : "Enter email",
		  email : "nhap theo dung kieu email"
		},
		name : {
           required : "enter name"
		},
		pass : {
			required : "input pass",
			minlength : jQuery.validator.format("Min is {0}")
		},
		re_pass : {
			equalTo : "Not same"
		}
	}
})
var json = `[
	{
		"id" : 0,
		"address" : ["HN" , "DN"]
	},
	{
		"id" : 1,
		"address" : ["Vu Han" , "Ho Bac"]
	}
]`
var obj_json = JSON.parse(json);
$("#country").change(function(){
	$("#address").empty();
	var country = $("#country").val();	
	if(country != ""){
		let arr_address = obj_json[country].address;
	    var option ="";
		for(let i = 0; i < arr_address.length; i++){
		option = "<option value = '" + i + "'>" + arr_address[i] + "</option>";
		$("#address").append(option);
	   }
	}
});

// xu ly login
// tao constructor
var user = function(name, mail, pass, bith, phone, country, address){
	   this.name = name;
	   this.mail = mail;
	   this.pass = pass;
	   this.bith = bith;
	   this.phone = phone;
	   this.country = country;
	   this.address = address;

}
$("#sign_up").click(function(){
	if($("#form_sign").valid()){
		var name = $("#name").val(), 
		mail = $("#email").val(), 
		pass = $("#pass").val(),
		bith = $("#bithday").val(), 
		phone = $("#phone").val(), 
		country = $("#country").val(),
		address = $("#address").val();
		var user_if4 = new user(name,mail,pass,bith,phone,country,address);
		var user_json = JSON.stringify(user_if4);
		localStorage.setItem(name, user_json);
	}
});
$("#login").click(function(){
	var name = $("#name_login").val();
	var pass = $("#pass_login").val();
	var key = localStorage.getItem(name);
	if( key == null){
		alert("sai mk hoac tai khoan");
	}
	else{
		var json_user = JSON.parse(key);
		var obj_pass = json_user.pass;
		if( pass == obj_pass) alert("Success!!");
		else alert("Password or user wrong");
	}
});