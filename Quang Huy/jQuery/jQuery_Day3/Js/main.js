$(document).ready(function(){
    function image(src,alt){
        this.src = src;
        this.alt = alt;
    }

    var list = [];

    var p = $("#div p");
    for (let i=0; i<p.length;i++){
        var src = $(p[i]).attr("src");
        var alt = $(p[i]).attr("alt");
        var img_arr = new image(src,alt);
        list[i] = (img_arr);
    }
    
    var a = 0;
    var i;
    var isRunning = false;
    var interval = setInterval(function() {
    if (!isRunning) {
        i = a%(list.length);
        $("#img_").attr("src", list[i].src);
        $("#img_").attr("alt", list[i].alt);
        $("#name").html(list[i].alt);
        $("#img_").fadeOut(2000,function(){
            $("img").fadeIn(2000);
        });
        a++;
    }
},2000);
$("#pause").click(function () {
    isRunning = true;
});
$("#play").click(function () {
    isRunning = false;
});
});



