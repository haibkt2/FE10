var $ = function(id) {
    return document.getElementById(id);
}
var check = function(value) {
    if (isNaN(value) || value < 0) {
        alert("input number > 0");
        return false;
    } else return true;
}

$("submit").onclick = function() {
    var S = $("S").value;
    var s = 0;
    var PIT = 0;
    var T = 0;
    if (check(S)) {
        if (S < 5000) {
            s = S * 0.05;

        } else if (S >= 5000 && S <= 10000) {
            s = S * 0.1;

        } else if (S > 10000) {
            s = S * 0.15;

        }
        $("s").value = s;
        PIT = s > 1000 ? 0.1 : 0;
        $("PIT").value = PIT * 100 + "%";
        T = s - s * PIT;
        $("T").value = T;
    } else alert("input again!");

}