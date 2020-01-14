//Bai 1
do{
    var a = prompt("nhap vao so a",);
    var b = prompt("Nhap vao so b",);
    var c = prompt("Nhap vao so c",);
    var max;
	if(!isNaN(a) && !isNaN(b) && !isNaN(c)){
		 max = a;
		if( b >= max){
			max = b;
        }
		if( c >= max){
			max = c;
        }
    }
	alert("so lon nhat = "+max);

}while(isNaN(a) || isNaN(b) || isNaN(c));


// Bai 2
for(var i = 0; i <= 15; i++){
	if(i % 2 == 0){
		alert("so chan: "+i);
    }else{
		alert("so le: "+i);
    }
}


// Bai 3
var sum = 0;
for(var i = 0; i < 1000; i++){
	if((i % 3 == 0) && (i % 5 == 0)){
		sum+=i;
    } 
}
alert("result = "+sum);