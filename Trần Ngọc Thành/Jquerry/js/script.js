$(document).ready(function(){
    $("div").hide();
    $("h2").click(function(){
        $(this).next().toggle();
        $(this).children("a").toggleClass("cl");
        $(this).children("i").toggleClass("fas fa-plus");
        $(this).children("i").toggleClass("fas fa-minus");
    })
})
