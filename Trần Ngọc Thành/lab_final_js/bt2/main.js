//common function
var $ = function(id){
    return document.getElementById(id);
}
//create opject student (name, score)
var student = function(name, score){
    this.name = name;
    this.score = score;
}
//declare amount of student
var n = prompt("Input amount of student", 5);
//check validate
while(isNaN(n)){
    alert("Please input number");
    n = prompt("Input amount of student",5);
}
//set value for multiple student(name, score)
var st_list = [];
for (let i = 0; i < n; i++){
    var name = prompt("Enter student name");
    var score = prompt("Enter student score");
    //check validate
    while(isNaN(score)){
        alert("Please input valid score");
        var name = prompt("Enter student name");
        var score = prompt("Enter student score");
    }
    var nstudent = new student(name, score);
    //add new student to array st_list
    st_list.push(nstudent);
}
//print all the student information(fomat: Student name: || Student score:)
var print_st = function(){
    for(const student of st_list)
    $("print_st").innerHTML += "Student name: " + student.name +" || "+"Student score: " + student.score + "<br>";
}
print_st();
//count and print the amount of student that has score equal or higher than 5
var count_st = function(){
    var count = 0;
    for(const student of st_list){
        if(student.score >= 5){
            count ++;
        }
        $("count_st").innerHTML = "Ammount of student that has score equal or higher than 5:"+count;
    }
}
count_st();

