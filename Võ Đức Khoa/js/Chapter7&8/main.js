//common function
var $ = function(id) {
        return document.getElementById(id);
    }
    //format time
function formatTime(value) {
    return value = (value < 10) ? '0' + value : value;
}
setInterval(function showTime() {
    var date = new Date();
    var h = formatTime(date.getHours());
    var m = formatTime(date.getMinutes());
    var s = formatTime(date.getSeconds());
    var ap = (date.getHours() < 12) ? 'AM' : 'PM';
    $('hours').innerHTML = h;
    $('minutes').innerHTML = m;
    $('seconds').innerHTML = s;
    $('ap').innerHTML = ap;
    var plan = localStorage.getItem(h + ':' + m);
    if (plan != null) {
       $('my_audio').play();
       $('show_mess').innerHTML = plan;
    }
   
}, 1000);
$('set_time').onclick = function() {
    var text = $('mess').value;
    var time = $('time').value;
    if (time.trim() == '' || time == null || text == null || text.trim() == '') alert('Please input message and alarm time ...');
    else {
        localStorage.setItem(time, text);
    $('mess').value = '';
    $('set_time').setAttribute('class','none');
    $('turn_off').removeAttribute('class');
}
    }
$('turn_off').onclick = function() { 
    $('turn_off').setAttribute('class','none');
    $('set_time').removeAttribute('class');
    var time = $('time').value;
    localStorage.removeItem(time);
    $('my_audio').pause();
    $('time').value = '';
    $('show_mess').innerHTML = 'clock';
}