
var Investment_Amount = document.getElementById("investment");
var Rate = document.getElementById("annual");
var id_years = document.getElementById("years");
var id_future = document.getElementById("future");
var id_btn_calculate = document.getElementById("btn_calculate");

window.onload = function(){
    id_btn_calculate.onclick = function(){
        do{
            if(!isNaN(id_investment) && !isNaN(id_annual) && !isNaN(id_years)){
                if(id_years == 1){
                    var The_Total_Of_The_Previous_Year = Investment_Amount + Investment_Amount*Rate;
                }
                else if(id_years == 2){
                    var The_Total_Of_The_Previous_Year = Investment_Amount  + Investment_Amount * Rate
                    +  (Investment_Amount  + Investment_Amount * Rate) * Rate;
                }else{
                    var N_year = The_Total_Of_The_Previous_Year + The_Total_Of_The_Previous_Year * id_years;
                }
                id_btn_calculate.settex
            }
        }while(isNaN(id_investment) || isNaN(id_annual) || isNaN(id_years))
    }
}