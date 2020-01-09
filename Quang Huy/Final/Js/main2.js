var student = function(name, score){
    this.name = name;
    this.score = score;
}

var n = prompt("Input amount", 5);
while(isNaN(n)){
    alert("Input a number");
    n = prompt("Input amount",5);
}

var list= [];
for (let i = 0; i< n; i++){
    var name = prompt("Input name");
    var score = prompt("Input score");
    while(isNaN(score)){
        alert("Input a number");
        score = prompt("Input score");
    }
    var st = new student(name, score);
    list.push(st);
}

var print = function () {
    for (const student of list) {
        document.getElementById("print").innerHTML +=  "name: " + student.name + " - " + "score: " + student.score + "<br>";
    }
}
print();


var print_counts = function () {  
    var counts = 0;
    for (const student of list) {
        if(student.score >= 5){
            counts ++;
        }
        document.getElementById("print_counts").innerHTML = "The number of students have score greater than or equal to 5: " + counts;
    }
}   
print_counts();


