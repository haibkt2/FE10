// common function
var $ = function(id) {
    return document.getElementById(id);
};
var h,m;
// show time current
setInterval(showTime, 1000);
// setup time
$("").onclick = function(){
	// get mess
	var mess = $("").value;
	// get time setup
	var time = $("id_input_type_time").value;
	// validate input
	if(mess.trim() == "" && time.trim() == ""){
		// alert error
	} else {
		// set time and mess
		localStorage.setItem(time, mess);
	}
	
};
// pause audio
$("").onclick = function(){
	var date = new Date();
	h = formatTime(date.getHours());
	m = formatTime(date.getMinutes());
	turnOffAudio();
};
function showTime(){
	// get time current
	var date = new Date();
	h = formatTime(date.getHours());
	m = formatTime(date.getMinutes());
	// show time current
	$("").innerHTML = h + " : " + m;
	// check and show mess
	// get time localStorage
	var plan = localStorage.getItem(h+":"+m);
	// check time setup
	if(plan != null) {
		// show mess
		$("").innerHTML = plan; // plan == mess
		// check audio played
		var isPlay = sessionStorage.getItem(h+":"+m);
		if(isPlayed == null) {
			// play audio
			$("").play();
		}
		
		// display button : turn off audio
		// add class and display block(yourself code)
		// turn off audio after t(s) , ex : t = 12000
		setTimeout(turnOffAudio, 12000);
		/*setTimeout(function(){
			$("").pause();
		}, 12000)*/
		
	}
}
// turn off audio
function turnOffAudio(){
	// pause audio
	$("").pause();
	// set audio played
	sessionStorage.setItem(h+":"+m, "");
	$("").innerHTML = "";
}
// format time
function formatTime(value) {
	return (value < 10) ? '0' + value : value; 
}

