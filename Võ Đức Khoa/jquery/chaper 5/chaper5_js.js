var h2 = $("h2");
h2.click(function(){
    h2 = $(this);
    div = h2.next();
    div.toggle("none");
});
