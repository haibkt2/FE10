$("h2").attr("minus");
$(document).ready(function() {
    $(this).toggleclass('h2');
    $("h2").click(function(evt) {
        $("h2").attr("minus");
        if ($("h2") == "minus") {
            $("div").next().hide();
            $("h2").attr("plus");
        } else {
            $("div").next().show();
            $("h2").attr("minus");
        }
        evt.preventDefault();
    });
});