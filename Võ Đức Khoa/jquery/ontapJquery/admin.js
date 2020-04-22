//setdefault admin
function setAdmin(){  
    localStorage.setItem("admin","admin")
}
setAdmin();
 // validate
//  $("#form_sign").validate({
// 	rules : {
// 	    code :{
//             required : true
//         },
//         username :{
//             required : true
//         },
// 		email : {
// 		   required : true,
// 		   email : true
		   
// 		},
// 		name : {
//             required : true
// 		},
// 		pass : {
// 			required : true,
// 			minlength : 6
// 		},
// 		re_pass : {
// 			equalTo : "#pass"
//         },
//         address :{
//             required: true
//         }	
// 	}, 
// 	messages : {
//         code :{
//           required: "Enter code"
//         },
//         username :{
//             required : "Enter username"
//         },
// 		email : {
// 		  required : "Enter email",
// 		  email : "nhap theo dung kieu email"
// 		},
// 		name : {
//            required : "enter name"
// 		},
// 		pass : {
// 			required : "input pass",
// 			minlength : jQuery.validator.format("Min is {0}")
// 		},
// 		re_pass : {
// 			equalTo : "Not same"
//         },
//         address :{
//             required : "Enter address"
//         }
// 	}
// })
// xu ly login
// tao constructor
var user = function(name,address,password,code,email,username){
	   this.name = name;
       this.address = address;
       this.password = password;
       this.code = code;
       this.email = email;
       this.username = username;

}
var arr = [];
$("#sign_up").click(function(){
		var name = $("#name").val(), 
		 mail = $("#email").val(), 
		 pass = $("#pass").val(),
         username = $("#username").val(),
		code = $("#code").val(),
		address = $("#address").val();
        var user_if4 = new user(name,address,pass,code,mail,username);
        arr.push(user_if4);
		var user_json = JSON.stringify(arr);
        localStorage.setItem("usered", user_json);
        $("#form_sign").attr("action","login.html")
        $("#form_sign").submit();
});
$("#login").click(function(){
	var name = $("#name_login").val();
	var pass = $("#pass_login").val();
    var key = localStorage.getItem("usered");
    var admin = localStorage.getItem("admin");
    if(admin == pass){
        if(name = "admin"){
            $("#form_login").attr("action","manager.html");
            $("#form_login").submit();
        }
    }
    else
	   if( key == null || key == "[]") alert("tai khoan nay chua duoc tao hay dang register account");
       else{
        var usered = JSON.parse(key);
        usered.forEach(item =>{
         if( item.password == pass) {
             $("#form_login").attr("action","https://www.facebook.com/khoa.voduckhoa");
             $("#form_login").submit();
             }
         else alert('sai password');
        })              
     }		        
});