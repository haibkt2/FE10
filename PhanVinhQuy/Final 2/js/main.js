// 1.	User prompt function declared scores of n elements, each element is the average grade and name of each student (default n = 5).
var student = function(name, mark) {
    this.name = name;
    this.mark = mark;
}
var students = [];
var n = prompt("Nhập số sinh viên cần nhập", 5);
if (!isNaN(n)) {
    for (let i = 0; i < n; i++) {
        var name = prompt("Nhập tên sinh viên");
        do {
            var mark = prompt("Nhập điểm sinh viên");
        } while (isNaN(mark));
        var st = new student(name, mark);
        students.push(st);
    }
}
else alert("Nhập n là số nguyên");
// 2.	 Write a JavaScript function to enter student's score to the array and then print the array elements to a web page.
var printMarks = function () {
    for (const student of students) {
        document.getElementById("mark").innerHTML += student.name + ":" + student.mark + "<br>";
    }
}
printMarks();
// 3.	 Write a JavaScript function that counts the number of students have score greater than or equal to 5 and then print result to a web page.
var countMark = function() {
    var count = 0;
    for (const student of students) {
        if (student.mark > 5) {
            count ++;
        }
    }
    return count;
}
var count = countMark();
document.getElementById("count").innerHTML = count;
