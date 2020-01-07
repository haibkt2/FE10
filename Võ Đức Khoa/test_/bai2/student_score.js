var $ = function(id){
    return document.getElementById(id);
}
var student = function(name,avg){ 
    this.name = name;
    this.avg = avg;
};
// // student.prototype.nhap = function(){
// //     prompt = ('Enter score average!','');
// //     prompt = ('Enter name student!','');
// // };
// student.prototype.xuat = function(avg,name){
//     document.write('Name:'+avg+', Average score:'+name+'<br>');
// };
// student.prototype.dem = function(avg){
//     var count = 0;
//     if(avg > 5) count++;
//     document.write('Number student has average score > 5 is = '+count);
// }
// $('nhap').onclick = function(){
   
//     for(let i = 1; i <= 2; i++){
//        alert('Enter information student '+i);
//        var avg = prompt('Enter score average!','');
//        var name = prompt('Enter name student!','');
//        var st = new student(avg,name);
//        st.xuat(avg,name);
      
//     }
//     st.dem(avg);
// };
var n;
do{
  n = prompt('Enter amount number student',n);
}while(isNaN(n));
var a = [];

function nhap(){
   for(let i = 1; i <=n; i++){
    do{ 
        var name = prompt('Enter name student '+i,name);
        var avg = prompt('Enter average score student '+i,avg);
    }while(!isNaN(name)||isNaN(avg));
    var st = new student(name,avg);
    a.push(st);
   }
}
nhap();
function xuat(){
    for(let i = 0; i < a.length; i++){
        $('show').innerHTML += 'Name:'+a[i].name + ' Average:'+a[i].avg+'<br>';
    }
}
xuat();
function count(){
    var count = 0;
    for(let i = 0; i< a.length; i++){
    if(a[i].avg > 5 || a[i].avg == 5)
    count++;
    }
    $('show_count').innerHTML = 'Amount number student has average score >=5 is: '+count;
}
count();