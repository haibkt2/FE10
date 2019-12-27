// common function
var $ = function(id) {
    return document.getElementById(id);
};
var h, m,s,ap;
// show time current
setInterval(showTime, 1000);
// setup time
$("set_time").onclick = function() {
    // get mess
    var mess = $("message_").value;
    // get time setup
    var time = $("time").value;
    // validate input
    if (mess.trim() == "" && time.trim() == "") {
        alert("Error");
    } else {
        // set time and mess
        localStorage.setItem(time, mess);
    }

};
// pause audio
$("turn_off").onclick = function() {
    var date = new Date();
    h = formatTime(date.getHours());
    m = formatTime(date.getMinutes());
    turnOffAudio();
};
// turn off audio
function turnOffAudio() {
    // pause audio
    $("my_audio").pause();
    // set audio played
    sessionStorage.setItem(h + ":" + m, "");
    $("show_mess").innerHTML = "DONG HO VO GIA ^-^";
}
function showTime() {
    // get time current
    var date = new Date();
    h = formatTime(date.getHours());
    m = formatTime(date.getMinutes());
    s = formatTime(date.getSeconds());
    ap = (date.getHours < 12) ? "AM" : "PM";
    // show time current
    $("show_time").innerHTML = h + " : " + m ;
    // check and show mess
    // get time localStorage
    var plan = localStorage.getItem(h + ":" + m);
    // check time setup
    if (plan != null) {
        // show mess
        $("show_mess").innerHTML = plan; // plan == mess
        // check audio played
        var isPlayed = sessionStorage.getItem(h + ":" + m);
        if (isPlayed == null) {
            // play audio
            $("my_audio").play();
        }

        // display button : turn off audio
        // add class and display block(yourself code)
        // turn off audio after t(s) , ex : t = 12000
        //  setTimeout(turnOffAudio, 12000);
        /*setTimeout(function(){
        	$("").pause();
        }, 12000)*/

    }
}
// format time
function formatTime(value) {
    return (value < 10) ? '0' + value : value;
}