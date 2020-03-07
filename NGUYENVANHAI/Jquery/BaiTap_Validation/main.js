$("#email_form").validate({
    rules: {
        email_add:{
            required: true,
            email: true},
        first_name: {
            required: true,
            rangelength: [14,24]
        }
        },
    messages: {
        email_add:{
            required: "Nhập giùm chế ơi!!",
            email: "Nhập giùm email đúng zs!!"},
        first_name: {
            required: "Lại để trống rồi!!", 
            rangelength: jQuery.validator.format("it qua kk!!")
        
        }
    }
});