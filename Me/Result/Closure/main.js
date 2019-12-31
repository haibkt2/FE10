var $ = function (id) {
    // body... 
    return document.getElementById(id);

function execute(img, srcSecond, altSecond) {
    var firsSrc = img.src;
    var firsAlt = img.alt;
    // function closure
    function mouseover () {
        img.src = srcSecond;
        img.alt = altSecond; 
    }
    // function closure
    function mouseout () {
         img.src = firsSrc;
         img.alt = firsAlt;
    }
    // asign event
    $("id_img").addEventListener("mouseover", mouseover);
    $("id_img").addEventListener("mouseout", mouseout);

}
// when init page,
// invoke method execute
execute();