$(document).ready(function(){
    $("div").hide();
    $("h2").click(function(){
        $(this).children("div").toggle();
        $(this).children("a").toggleClass("cl");
        $(this).children("i").toggleClass("fas fa-plus");
        $(this).children("i").toggleClass("fas fa-minus");
        $(this).siblings().children("div").hide();
        if( $(this).siblings().children("div").attr("class") !=="fas fa-plus"){
            $(this).siblings().children("i").removeClass("fas fa-minus");
            $(this).siblings().children("i").addClass("fas fa-plus");
        }
    })
})
