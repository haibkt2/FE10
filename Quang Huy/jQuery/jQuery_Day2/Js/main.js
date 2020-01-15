$(document).ready(function(){
    $("h2").click(function() {
        $(this).next().toggle();
        $(this).children("i").toggleClass("glyphicon glyphicon-minus");
        $(this).children("a").toggleClass("rs");
        $("div").not($(this).next()).hide();
        $("a").not($(this).children()).removeClass("rs");
        $("i").not($(this).children()).removeClass("glyphicon glyphicon-minus");
    });
});