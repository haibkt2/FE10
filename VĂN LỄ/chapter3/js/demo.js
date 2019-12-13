// var a = 6;
//  a-- ;
//   document.write(a);
//   console.log("");
//   chữ C ko viết hoa!!!!!!
// console.log('x');
//doccument in ra màn hình //
var value =  prompt("Input number",0);
if (!isNaN(value)) {
    alert("number: "+ parseFloat(value));
}
else {
    do {
        alert("Pls input number");
        value = prompt("Input number",0);
    } while (isNaN(value));
    alert("number: "+ parseFloat(value));
}
// var value = prompt("input number");
// // if (isNaN(value));
// // else{
// //     alert(valua);
// // }
// if (!isNaN(value)) {
    
// } else {
//     alert(value);
    
// }


