// -----------------------------------------//
//Bai 1
// ----------------------------------------//

var myColor = ["Red", "Green", "White", "Black"];
var result = "";

for(let i = 0; i < myColor.length; i++){
    result += myColor[i]+", ";
}
result = result.substring(0, result.length-2);
console.log(result);

// ----------------------------------------//
//Bai 2
// --------------------------------------//

var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];

for(let i = 0; i < arr1.length; i++){
    for(let j = 1; j < arr1.length-i; j++){
        if(arr1[j-1] > arr1[j]){
            var temp = arr1[j-1];
            arr1[j-1] = arr1[j];
            arr1[j] = temp;
        }
    }
}

for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

//-------------------------------------------//
//Bai 3
//-------------------------------------------//

var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

    /*  Chịu em làm không ra!!
      Ý tưởng giải quyết bài toán.
        -Ý tưởng lần 1:
        em định dùng thêm một mảng temp sao chép từ mảng arr, rồi dùng vòng lặp với mảng temp đó.
    Check xem nếu 2 phần tử trùng nhau thì count++, đồng thời remove luôn phần tử trùng đó ra khỏi mảng temp.
    Làm như vậy, thì các lần lặp tiếp theo sẽ không gặp lại các phần tử đã trùng. Em thấy ý tưởng em
    cũng hay nhưng mà em lại không biết áp dụng để làm huhu ^_^!! 

    Đã 1h00 sáng thôi em đi ngủ đây, anh ngủ ngon kk!!
    */


//-------------------------------------------//
//Bai 4
//------------------------------------------//

var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];
var array3 = [];

for(let i = 0; i < array2.length; i++){
    if(i < array1.length){
        array3[i] = array1[i] + array2[i];
    }else{
        array3[i] = array2[i]+0;
    }
}

for(let i = 0; i < array3.length; i++){
    console.log(array3[i]);
}





//--------------------------------------//
//Bai tap 2
//---------------------------------------//

var arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var arr_new = [];

for(let i = 0; i < arr.length -1; i++){
    for(let j  = i + 1; j < arr.length; j++){
        if(arr[i] >= arr.length){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

alert(arr);

// Bai tap 3

var c_max = 0;
var vl_max = "";
var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

for(let i = 0; i < arr.length; i++){
    var c = 1;
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] == arr[j]){
            c++;
        }
    }
    if(c>= c_max){
        c_max = c;
        vl_max = arr[i];
    }
}


//check su ton tai voi gia tri la key.
// var arr_ex = ['a']['a'];

