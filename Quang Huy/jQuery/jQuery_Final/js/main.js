//select
var json = "[{\"id\":0,\"address\":[\"Hà Nội\",\"Đà Nẵng\",\"TP Hồ Chí Minh\"]},{\"id\":1,\"address\":[\"Tokyo\",\"Okinawa\",\"Osaka\"]}]";
var obj = JSON.parse(json);
$("#country").change(function () {
    $("#address").empty();
    var v_op = $("#country").val(); // empty, 0 or 1
    if (v_op != "") {
        let arr_adress = obj[v_op].address;
        // Loop arr, create option
        var option = "";
        for (let i = 0; i < arr_adress.length; i++) {
            option = "<option value=\"" + i + "\">" + arr_adress[i] + "</option>";
            $("#address").append(option);
        }

    }
});

//validate
$("#form-register").validate({
    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        pass: {
            required: true,
            minlength: 8
        },
        re_pass: {
            required: true,
            equalTo: "#pass"
        },
        phone: {
            required: true,
            number: true,
            minlength: 10,
            maxlength: 10
        },
        birth: {
            required: true
        },
        country: {
            required: true
        },
        address: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Please input your first name"
        },
        email: {
            required: "Please input your email",
            email: "This is not email"
        },
        pass: {
            required: "Please input your password",
            minlength: jQuery.validator.format("Password must have {0} characters")
        },
        re_pass: {
            required: "Please input re-password",
            equalTo: "The re-password must like password"
        },
        phone: {
            required: "Please input your phone number",
            number: "This is not phone number",
            minlength: jQuery.validator.format("The phone number must have is {0} numbers"),
            maxlength: jQuery.validator.format("The phone number must have is {0} numbers")
        },
        birth: {
            required: "Please choose your birth day"
        },
        country: {
            required: "Please choose your country"
        },
        address: {
            required: "Please choose your address"
        }
    }
})

$("#form-login").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        pass: {
            required: true,
            minlength: 8
        },
    },
    messages: {
        email: {
            required: "Please input email",
            email: "This is not email"
        },
        pass: {
            required: "Please input password",
            minlength: jQuery.validator.format("Password must have {0} characters")
        },
    }
})

//constructor
var user = function (name, email, pass, birth, phone, country, address) {
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.birth = birth;
    this.phone = phone;
    this.country = country;
    this.address = address;
}

//button register
$("#register").click(function () {
    if ($("#form-register").valid()) {
        //get info user
        var name = $("#name").val();
        var email = $("#email").val();
        var pass = $("#pass").val();
        var birth = $("#birth").val();
        var phone = $("#phone").val();
        var country = $("#country").val();
        var address = $("#address").val();
        //create obj user
        var user1 = new user(name, email, pass, birth, phone, country, address);
        //register user
        //convert json to object
        var json = JSON.stringify(user1);
        //save local
        localStorage.setItem(email, json);
        alert("Register success");
        window.location.href= 'login.html';
    }
});


//button login
$("#login").click(function () {
    //validate
    //get value input
    if ($("#form-login").valid()) {
        var email = $("#email").val();
        var pass = $("#pass").val();
        //get data user, check login
        var user_json = localStorage.getItem(email);
        if (user_json == null) {
            alert("Email or password is wrong");
        } else {
            //check pass
            //convert json to object
            var user = JSON.parse(user_json);
            var pass_infon = user.pass;
            if (pass == pass_infon) {
                alert("Login success");
            } else {
                alert("Email or password is wrong");
            }
        }
    }
});
