$(document).ready(function(){
    var file_path = $("#fadetos p");
    var img_obj, image_arr = [] ;
    var src_ , alt_ ;
     for(let i = 0; i<file_path.length; i++){
         src_ = $(file_path[i]).attr("src_");
         alt_ = $(file_path[i]).attr("alt_");
        img_obj = new Image();
        img_obj.src = src_;
        img_obj.alt = alt_;
        image_arr[i] = img_obj;
     }
     var count = 0;
     var next = 0;
     var list_image = function(){
        $("#fadeto").fadeOut(1000,function(){
            next = count % image_arr.length;
            $("#fadeto").attr("src",image_arr[next].src).fadeIn(1000);
            $("#fadeto").attr("alt",image_arr[next].alt).fadeIn(1000);
        });
        count++;
     }
     var my_func;
    my_func = setInterval(list_image,1000);
    $("#play").click(function(){
       my_func = setInterval(list_image,1000);
    });
    $("#pause").click(function(){
        clearInterval(my_func);
    });   
});

    
