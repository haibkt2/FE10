$(document).ready(function(){

	$("h3").click(function(evt){
		$(this).children("a").toggleClass("qwer");
		$(this).toggleClass("minus");
		if($(this).attr("class") !=="minus"){
			$(this).children("span").text("+");
			$(this).next().hide();
			
		}
		else{
			$(this).children("span").text("-");
			$(this).next().show();
			
		}
		evt.preventDefault();
	});
	$("div").find()("a: first").focus();
});