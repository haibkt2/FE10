var $ = function(id) {
    return document.getElementById(id);
}
var validateValue = function(value) {
    return (value.trim() == '' || isNaN(value) || value < 0) ? false : true;
}
$('type').onchange = function() {
    return $('amount').disabled = ($('type').value == 'other') ? false : true;
}
$('calculator').onclick = function() {
    var subtotal = $('subtotal').value;
    var check = validateValue(subtotal);
    var amount;
    var percent;
    if (check) {
        if (subtotal < 10000) {
            amount = 0;
            percent = 10;
        } else if ($('type').value == 'lay') {
            amount = 200;
            percent = (subtotal < 15000) ? 10 : 15;
        } else if ($('type') == 'honer') {
            amount = 300;
            percent = (subtotal < 15000) ? 15 : 20;
        } else {
            var check = validateValue($('amount').value);
            if (check && $('amount').value < 500) {
                percent = 15;
                amount = $('amount').value;
            } else {
                alert('error');
                check = false;
            }
        }
    } else {
        alert('error');
        check = false;
    }
    if (check) {
        $('amount').value = amount;
        $('percent').value = percent;
        var total = subtotal * (percent / 100) - amount;
        $('total').value = parseFloat(total).toFixed(2);
    }
}