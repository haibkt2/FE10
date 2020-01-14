$("#Joinlist").click(function(){
	var email = $("#email").val().trim();
	var remail = $("#remail").val().trim();
	var firstname= $("#firstname").val().trim();

	if (email == '') {
		$("#email").next().text("nhap email");	
	} 
	if (remail ==''){
		$("#remail").next().text("nhap lai email");

	}
	if (firstname ==''){
		$("#firstname").next().text("nhap name");
	}
	
});
