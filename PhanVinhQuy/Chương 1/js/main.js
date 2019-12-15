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
