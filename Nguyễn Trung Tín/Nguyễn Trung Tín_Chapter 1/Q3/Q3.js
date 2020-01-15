$(document).ready(function() {
    function create_img(src, alt, height) {
        this.src = src;
        this.alt = alt;
        this.height = height;
    }
    var p = $("#img_ p");
    var img_obj, img_arr = [],
        src, alt, height;
    for (let i = 0; i < p.length; i++) {
        src = $(p[i]).attr("src");
        alt = $(p[i]).attr("alt");
        height = $(p[i]).attr("height");
        // img_obj = new create_img(src, alt, height);
        img_obj = new Image();
        img_obj.src = src;
        img_obj.alt = alt;
        img_obj.height = height;
        img_arr[i] = (img_obj);
    }
    var a = 0,
        l = img_arr.length;
    setInterval(function() {
        $("#a1").fadeOut(2000, function() {
            $("#a1").attr("src", img_arr[a % l].src);
            $("#a1").attr("alt", img_arr[a % l].alt);
            $("#a1").attr("height", img_arr[a % l].height);
            $("#a1").fadeIn(2000);
        });
        a++;
        console.log(img_arr[a % l].src);
    }, 2000);
});