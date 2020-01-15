var Img = function (src, alt) {
    this.src = src;
    this.alt = alt;
};
var imgList = [];
var img, alt, src;
var p = $("p");
for (let i = 0; i < p.length; i++) {
    src = $(p[i]).attr("src");
    alt = $(p[i]).attr("alt");
    img = new Image()
    img.src = src;
    img.alt = alt;
    imgList.push(img);
}

// setinterval

var a = 0;
var i;
function change() {
    i = a % imgList.length;
    $("img").fadeIn(2000);
    $("img").attr("src", imgList[i].src);
    $("img").attr("alt", imgList[i].alt);
    $("#name").html(imgList[i].alt);
    $("img").fadeOut(2000);
    a++;
}
var play;
// gán sự kiện button play
$("#play").click(function() {
    play = setInterval(change,2000);   
});
// gán sự kiện button stop
$("#stop").click(function() {
    clearInterval(play);
})
