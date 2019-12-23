var $ = function(id){
    return document.getElementById(id);
}
setInterval(function(){
    //get current time
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds();
//format time
currentMinutes = (currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = (currentSeconds < 10 ? "0" : "" ) + currentSeconds; 
var timeOfDay = currentHours < 12 ? "AM" : "PM";
currentHours = (currentHours < 10 ? "0" :"") + currentHours;
var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + timeOfDay;
//display time
$('clock').firstChild.nodeValue = currentTimeString;
},1000);
$("set").onclick = function(){
    setInterval(function(){
        //get current time
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    //format time
    currentMinutes = (currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "" ) + currentSeconds; 
    var timeOfDay = currentHours < 12 ? "AM" : "PM";
    currentHours = (currentHours < 10 ? "0" :"") + currentHours;
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + timeOfDay;
    //dieu kien hien thi
    if($("input").value == currentTimeString){
        $("display").value == "Hello";
    }
    },1000); 
}


