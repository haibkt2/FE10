
 var accordion_item = $(".accordion-item");

 accordion_item.click(function(){
    $(".accordion-item").not($(this)).each(function(){
        $(this).removeClass("active");
    });

    $(this).toggleClass("active");
 });


