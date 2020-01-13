$(document).ready(function() {
    $("div").hide();
    $("a").css("color", "black");
    $("h2").click(function() {
        $(this).next().slideToggle(400);
        $(this).children().toggleClass("main");
        $(this).children("i").toggleClass("fa-arrow-circle-down");
        $(this).children("i").toggleClass("fa-arrow-circle-right");
        $("div").not($(this).next()).hide();
        $("a,i").not($(this).children()).removeClass("main");
        var notElementI = $("i").not($(this).children("i"));
        notElementI.each(function() {
            if ($(this).hasClass("fa-arrow-circle-down")) {
                $(this).toggleClass("fa-arrow-circle-down");   
                $(this).toggleClass("fa-arrow-circle-right"); 
            }
        });
    });
});