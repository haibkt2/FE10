        var $ = function(id){
            return document.getElementById(id);
        };  
        
        $("cal").onclick = function() {
            var sales = $("sales").value;        
            var salary = $("salary").value;
            var personal = $("personal").value;
            var total = $("total").value;
            if(isNaN(sales) || sales <0 || sales == "" || sales == ' '){
                alert("input number");
            } else {
                if (sales < 5000) {
                    salary = sales * 0.05;
                } else if (sales <= 10000 && sales >= 5000) {
                    salary = sales * 0.1;
                } else {
                    salary = sales * 0.15;
                }

                $("salary").value = salary;
                
                personal = (salary>=1000) ? 0.1 : 0;

                $("personal").value = personal * 100 +"%";
                total = salary - salary * personal;
                document.getElementById("total").value=total;
            }
        }