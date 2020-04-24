$().ready(function(){

	$("#register_form").validate({
        rules: {
            register_username: {
                required: true,
                minlength: 5
            },
            register_password: {
                required: true,
                minlength: 8
            },
            repeat_password: {
                required: true,
                minlength: 8,
                equalTo: "#register_password"
            }

        },
        messages: {
            register_username: {
                required: "Vui lòng nhập vào tài khoản của bạn.",
                minlength: jQuery.validator.format("tài khẩu của bạn phải ít nhất {0} ký tự.")
            },
            register_password: {
                required: "Vui lòng nhập vào mật khẩu.",
                minlength: jQuery.validator.format("mật khẩu của bạn phải ít nhất {0} ký tự.")
            },
            repeat_password: {
                required: "Vui lòng nhập lại mật khẩu.",
                minlength: jQuery.validator.format("mật khẩu của bạn phải ít nhất {0} ký tự."),
                equalTo: "Vui lòng nhập lại đúng mật khẩu phía trên."
            }
        }
    });

	//validate login
    $("#login_form").validate({
        rules: {
            username: {
                required: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 4
            }
        },
        messages: {
            username: {
                required: "Vui lòng nhập vào tài khoản của bạn.",
                minlength: jQuery.validator.format("tài khẩu của bạn phải ít nhất {0} ký tự.")
            },
            password: {
                required: "Vui lòng nhập vào mật khẩu.",
                minlength: jQuery.validator.format("mật khẩu của bạn phải ít nhất {0} ký tự.")
            }
        }
    });

    $("#form_manager").validate({
        rules: {
            code: {
                required: true,
                minlength: 3
            },
            yourname: {
                required: true,
                minlength: 5
            },
            address: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            },
            username: {
                required: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 8
            }

        },
        messages: {
            code: {
                required: "Vui lòng nhập vào mã số User.",
                minlength: jQuery.validator.format("Thông tin tên của bạn phải ít nhất {0} ký tự.")
            },
            yourname: {
                required: "Vui lòng nhập đầy đủ thông tin tên người dùng.",
                minlength: jQuery.validator.format("Thông tin tên của bạn phải ít nhất {0} ký tự.")
            },
            address: {
                required: "Vui lòng nhập đầy đủ địa chỉ người dùng.",
                minlength: jQuery.validator.format("Thông tin tên của bạn phải ít nhất {0} ký tự.")
            },
            email: {
                required: "Vui lòng nhập email!!",
                email: "Email của bạn không hợp lệ."
            },
            username: {
                required: "Vui lòng nhập vào tài khoản của bạn.",
                minlength: jQuery.validator.format("tài khẩu của bạn phải ít nhất {0} ký tự.")
            },
            password: {
                required: "Vui lòng nhập vào mật khẩu.",
                minlength: jQuery.validator.format("mật khẩu của bạn phải ít nhất {0} ký tự.")
            }
        }
    });

    // login to register
    var x = $("#login_form");
	var y = $("#register_form");
    var z = $("#btn");

    $("#register_page").click(function(){
        x.css("left", "-400px");
        y.css("left", "50px");
        z.css("left", "110px");
    });

    $("#login_page").click(function(){
        login_page();
    })

    function login_page(){
        x.css("left", "50px");
        y.css("left", "450px");
        z.css("left", "0");
    }

    //create admin
    
    var usera = function(code,username, pass, address, email, yourname){
        this.code = code;
		this.username = username;
        this.pass = pass;
        this.address = address;
        this.email = email;
        this.yourname = yourname;
	}

	var admin = new usera("100", "admin", "admin","Đà Nẵng","zzvanhai81@gmail.com","Nguyễn Văn Hải");
	var json = JSON.stringify(admin);

    localStorage.setItem(admin.username, json);
    
    //register
    $("#register").click(function () {
        if ($("#register_form").valid()) {
            let name = $("#register_username").val(),
                pass = $("#register_password").val();
            let user = new usera("",name, pass,"","","");
            let json = JSON.stringify(user);
            localStorage.setItem(name, json);
            login_page();
        }
    })

	// login
	$("#login").click(function(){
		if($("#login_form").valid()){
			let name = $("#username").val();
				pass = $("#password").val();

			let user_json = localStorage.getItem(name);
			if(user_json == null){
				alert("user or pass is wrong");
            }else{
				let user = JSON.parse(user_json);
                let pass_infor = user.pass;
                let user_infor = user.username;
				if(pass == pass_infor){
					if(user_infor == "admin"){
                        $("#login_form").attr("action", "manager_user.html");
                        $("#login_form").submit();
                    }else{
                        $("#login_form").attr("action", "user_page.html");
                        $("#login_form").submit();
                    }
				}else{
					alert("user or pass is wrong");
				}
			}
		}
	});

    //load table
    function allStorage() {

        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
    
        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
    
        return values;
    }

    function addTable(){
        let allUser = allStorage();
        for(let user of allUser){
            let obj_user = JSON.parse(user);
            let html = `<tr><th scope='row'>${obj_user.username != "admin" ? "<input type='radio' name='userradio' value='"+`${obj_user.username}`+"' ></input>" : ""}</th><td>${obj_user.code}</td><td>${obj_user.yourname}</td><td>${obj_user.address}</td><td>${obj_user.email}</td><td>${obj_user.username}</td></tr>`
            $("#table_body").append(html);
        }
    }
    addTable();

    // add user
    $("#add").click(function(){
        if($("#form_manager").valid()){
            let code = $("#code").val();
            let username = $("#username").val();
            let password = $("#password").val();
            let address = $("#address").val();
            let email = $("#email").val();
            let yourname = $("#yourname").val();
            let adduser = new usera(code,username, password, address, email, yourname);
            let json = JSON.stringify(adduser);
            localStorage.setItem(adduser.username, json);
            let html = `<tr><th scope='row'><input type="radio" name="userradio" value="${adduser.username}"></th><td>${adduser.code}</td><td>${adduser.yourname}</td><td>${adduser.address}</td><td>${adduser.email}</td><td>${adduser.username}</td></tr>`
            $("#table_body").append(html);
            $("#form_manager").trigger("reset");
        }
    });

    // delete user
    $("#Delete").click(function(){
        let index_code = $("input[name=userradio]:checked", "#user_table").val();
        if(index_code == null){
            alert("Vui lòng chọn người dùng cần xóa!!");
        }else{
            localStorage.removeItem(index_code);
            location.reload();
        }
    })

    // edit user
    $("#Edit").click(function(){
        let index_code = $("input[name=userradio]:checked", "#user_table").val();
        if(index_code != null){
            let select_user = localStorage.getItem(index_code); 
            let select_objuser = JSON.parse(select_user);
            $("#code").val(select_objuser.code);
            $("#username").val(select_objuser.username);
            $("#password").val(select_objuser.pass);
            $("#address").val(select_objuser.address);
            $("#email").val(select_objuser.email);
            $("#yourname").val(select_objuser.yourname);
        }else{
            alert("Vui lòng chọn người dùng cần sửa!!");
        }
    });

    // Save User
    $("#Save").click(function(){
        if($("#form_manager").valid()){
            let code = $("#code").val();
            let username = $("#username").val();
            let password = $("#password").val();
            let address = $("#address").val();
            let email = $("#email").val();
            let yourname = $("#yourname").val();

            let adduser = new usera(code,username, password, address, email, yourname);
            let json = JSON.stringify(adduser);
            localStorage.setItem(adduser.username, json);
            location.reload();
        }
    });

    // Exit
    $("#Exit").click(function(){
        window.location.href = "../html/index.html";
    });
});