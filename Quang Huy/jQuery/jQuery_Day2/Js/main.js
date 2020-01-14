$(document).ready(function(){
    $("div").toggle();
    $("span").toggleClass("glyphicon glyphicon-plus");
    $("h2").click(function() {
        $(this).next().toggle();
        $(this).children("span").toggleClass("glyphicon glyphicon-minus");
        $(this).children("a").toggleClass("rs");
    });
});