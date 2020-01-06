var $ = function(id){
    return document.getElementById(id);
}
var student = function(avg,name){ 
    this.avg = avg;
    this.name = name;
};
// student.prototype.nhap = function(){
//     prompt = ('Enter score average!','');
//     prompt = ('Enter name student!','');
// };
student.prototype.xuat = function(avg,name){
    document.write('Name:'+avg+', Average score:'+name+'<br>');
};
student.prototype.dem = function(avg){
    var count = 0;
    if(avg > 5) count++;
    document.write('Number student has average score > 5 is = '+count);
}
$('nhap').onclick = function(){
   
    for(let i = 1; i <= 2; i++){
       alert('Enter information student '+i);
       var avg = prompt('Enter score average!','');
       var name = prompt('Enter name student!','');
       var st = new student(avg,name);
       st.xuat(avg,name);
      
    }
    st.dem(avg);
};
