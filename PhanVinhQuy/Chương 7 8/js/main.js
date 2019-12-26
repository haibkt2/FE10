// common function
function $(id) {
    return document.getElementById(id);
};
// 
function convert(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}
// set ngày giờ, sau đó set xuất hiện mess và button
function time() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let beforeOrAfter = hour < 12 ? "AM" : "PM";
    hour = hour < 12 ? hour : hour - 12;
    $("time").innerHTML = convert(hour) + ":" + convert(minute) + ":" + convert(second) + " " + beforeOrAfter ;
    let timeString = $("time").innerHTML.substr(0,5);
    if (beforeOrAfter === "PM") {
        timeString = (parseInt(timeString.substr(0,2)) + 12) + timeString.substr(2,3);
    }
    else {
        return ;
    }
    for (let i = 0; i < localStorage.length; i++) {
        if (timeString === localStorage.key(i)) {
            $("message").innerHTML = localStorage[`${localStorage.key(i)}`];
            $("turnOff").style.display = "block";
        }
        // else {
        //     $("message").innerHTML = "";
        //     $("turnOff").style.display = "none";
        // }
    }
};
setInterval(time,1000);

// add event button set time
$("setTime").addEventListener("click",() => {
    if ($("inputMess").value == "" || $("inputTime").value == "") {
        alert("you must input");
    }
    else {
        localStorage.setItem($("inputTime").value,$("inputMess").value);
        alert("input success")
    }
    $("inputMess").value = "";
    $("inputTime").value = "";
});

// add event button clear
$("turnOff").onclick = () => {
    $("message").innerHTML = "";
    $("turnOff").style.display = "none";
};