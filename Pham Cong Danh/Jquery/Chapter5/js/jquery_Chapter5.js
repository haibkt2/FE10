$(document).ready(function(){
    $("div").hide();
    $("h2").click(function(){
        $(this).next().toggle();
        $(this).children("a").toggleClass('blue');
        $(this).children("i").toggleClass("fa-minus-circle");
    });
});