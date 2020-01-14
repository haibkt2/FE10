var $ = function(id){
    return document.getElementById(id);
}

var student = function(name, score){
    this.name = name;
    this.score = score;
}

var students = [];
var n = prompt("Please input the number of students:", 5);
if(!isNaN(n) && n > 0){
    for(let i = 0 ; i<n ; i++){
        do{
            var name = prompt("Enter student name");
            var score = prompt("Enter student score");
        }while(name.trim() == '' || isNaN(score) && score < 0)
        var st = new student(name,score);
        students.push(st);
    }
}
else alert("Please input a integer");

var output = function() {
    let i = 1;
    for (const student of students) {
        document.getElementById("score").innerHTML += "Name of student " + i + ": "+ student.name +" || " + "Score: " + student.score + "<br>";
        i++;
    }
}
output();

var Counts = function(){
    var count = 0;
    for (const student of students) {
        if(student.score >= 5){
            count++;
        }
    }
    return count;
}
var count = Counts();
document.getElementById("count").innerHTML = "The total of studens have score >=5 is: " + count;