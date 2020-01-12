$(document).ready(function(){
    $("div").hide();
    $("h2").click(function(){
        $(this).next().toggle();
        $(this).toggleClass('blue');
        $(this).children("i").toggleClass("fa fa-minus-circle");
    });
});