window.onload = function(){
    var $ = function(id){
        return document.getElementById(id);
    }
    function myFunction() {
        var type = $("type").value;
        if(type == 'other'){
            document.getElementById("amount").removeAttribute("disabled");
            $("percent").value = 15;
        }
    }
}