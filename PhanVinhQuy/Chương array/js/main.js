// Bài 1
var myColor = ["Red", "Green", "White", "Black"];
var _string = "";
for (let i = 0; i < myColor.length; i++) {
    _string += myColor[i] + ",";
}
document.write(" Bài 1: " + _string);
// Bài 2
var arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1];
for (let i = 0; i < arr1.length; i++) {
    var min = arr1[i];
    for (let j = i; j < arr1.length; j++) {
        if (arr1[j] < min) {
            min = arr1[j];
            arr1[j] = arr1[i];
            arr1[i] = min;
        }
    }
}
document.write(" Bài 2: " + arr1.toString());
// Bài 3
var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var soLanXuatHien = 0;
var find;
for (let i = 0; i < arr.length; i++) {
    var count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === arr[i]) {
            count++;
        }
    }
    if (count >= soLanXuatHien) {
        find = arr[i];
        soLanXuatHien = count;
    }
}
document.write(" Bài 3: " + find+" ");
// Bài 4
var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];
var arraySum = [];
var length = array1.length - array2.length;
if (length >= 0) {
    for (let i = 0; i < length; i++) {
        array2.push(0);      
    }
}
else {
    for (let i = 0; i < -length; i++) {
        array1.push(0);
    }
}

for (let i = 0; i < array1.length; i++) {
    arraySum.push(array1[i]+array2[i]);

}
document.write("Bài 4: "+arraySum.toString());
