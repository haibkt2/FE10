$(document).ready(function() {
    $("div").hide();
    $("a").css("color", "black");
    $("h2").click(function() {
        $(this).next().toggle();
        $(this).children().toggleClass("main");
        $(this).children("i").toggleClass("fa-arrow-circle-down");
    });
});