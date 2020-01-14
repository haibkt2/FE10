
$('#join').click(function(){
    var check = true;
    var email = $('#email').val();
    var re_email = $('#re_email').val();
    var name = $('#name').val();
    if(email.trim() == '') {
        $('#email').next().text('error');
        check = false;
    }
    else  $('#email').next().text('*');
    if(re_email.trim() == '') {
        check = false;
        $('#re_email').next().text('*');
    }
    if(name.trim() == ''){
        check = false;
        $('#name').next().text('error');
    }
    else $('#name').next().text('*');
    if(email != re_email) {
        check = false;
        $('#re_email').next().text('re-email wrong');
    }
    else $('#re_email').next().text('*');
    if(check == true)   {
        $('#form').submit();
    } 
})