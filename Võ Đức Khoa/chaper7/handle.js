//common function
var $ = function(id){
    return document.getElementById(id);
}
// thiet lap autido
var audio = $("my_audio");
//lay object h2
var h2 = $("clock");
//thiet lap thoi gian hien thi tren may tinh
setInterval(function(){
     // lay thoi gian hien tai va format 
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var ampm = (hours < 12) ? "AM" : "PM"; 
    if(hours < 0)
        hours = hours *-1;
    else
       if(hours == 0) hours = 12;
       else hours = hours;
    // dung de hien thi tren man hinh
    h2.textContent =add_zero(hours)  + ":" + add_zero(minutes) + ":" + 
    add_zero(seconds) + ":" + ampm;
},1000);
// them so 0 vao truoc
function add_zero(time){
    return (time < 10) ? "0" + time : time;
}
// thiet cac obj select
function hoursMenu(){
	var select = $('alarmhrs');
	for (i=1; i <=12; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);		
	}
}
hoursMenu();
function minMenu(){
	var select = $('alarmmins');
	for (i=0; i <= 59; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu();
function secMenu(){
	var select = $('alarmsecs');
	for (i=0; i <= 59; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu();
// thiet lap set alarm
function set_alarm(){
    // get value trong select
    var h = $('alarmhrs');
    var m = $('alarmmins');
    var s = $('alarmsecs');
    var ap = $('ampm');
    h = h.options[h.selectedIndex].value;
    m = m.options[m.selectedIndex].value;
    s = s.options[s.selectedIndex].value;
    ap = ap.options[ap.selectedIndex].value;
     var alarmTime = add_zero(h) + ":" + add_zero(m) + ":" +add_zero(s)+ ":"+ ap;
    $('alarmhrs').disabled = true;
    $('alarmmins').disabled = true;
    $('alarmsecs').disabled = true;
    $('ampm').disabled = true;
    setInterval(function(){

        var date = new Date();
        
        var hours = (12 - (date.getHours()));
        
        var minutes = date.getMinutes();
        
        var seconds = date.getSeconds();
        
        var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

    
        if (hours < 0) {
            hours = hours * -1;
        } else if (hours == 0) {
            hours = 12;
        } else {
            hours = hours;
        }
        
        var currentTime = h2.textContent = add_zero(hours) + ":" + add_zero(minutes) + ":" + add_zero(seconds) + ":" + ampm;
        
    
        if (alarmTime == currentTime) {
            audio.play();
            }
    
    },1000);
    
    
}
function clear_alarm() {

	$('alarmhrs').disabled = false;
	$('alarmmins').disabled = false;
	$('alarmsecs').disabled = false;
	$('ampm').disabled = false;
	audio.pause();
}
$('setButton').onclick = function(){
    set_alarm();
}

$('clearButton').onclick = function(){
    clear_alarm();
}

