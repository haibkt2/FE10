//setdefault admin
function setAdmin(){  
    localStorage.setItem("admin","admin")
}
setAdmin();
$("form").validate({
        rules : {
            code :"required",
            name :"required",
            email : {
                required : true,
                email:true
            },
            username : "required",
            pass : {
                required : true,
                minlength : 5
            },
            re_pass : {
                equalTo : "#pass"
            },
            address :"required"
        },
    messages : {
            code : "please enter",
            name :"please enter",
            email : {
                required : "please enter",
                email:"must standard email"
            },
            username : "please enter",
            pass : {
                required :"please enter",
                minlength : "least 5 syntax"
            },
            re_pass : {
                equalTo : "must comfirm correct"
            },
            address :"please enter"
        }
}); 

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
//chuc nang tu dong focus cho cac input
$("#username").focus(function() {
    var name = $("#name").val();
    if (name && !this.value) {
        this.value = name + ".123";
    }
});
$("#code").focus(function() {
    var name = $("#name").val();
    if (name && !this.value) {
        this.value = name + "_123";
    }
});
$("#email").focus(function() {
    var name = $("#name").val();
    if (name && !this.value) {
        this.value = name + "@gmail.com";
    }
});
$("#address").focus(function() {
        this.value = "VietNam";
});
$("#pass").focus(function() {
    var name = $("#name").val();
    if (name && !this.value) {
        this.value = name + "123";
    }
});
$("#re_pass").focus(function() {
    var name = $("#name").val();
    if (name && !this.value) {
        this.value = name + "123";
    }
});