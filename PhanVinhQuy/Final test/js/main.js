$(document).ready(function () {
    // 1.setup authen and validate
    localStorage.setItem("authen", "adminadmin");
    $("#register").validate(
        {
            rules: {
                userName: "required",
                password: "required"
            },
            messages: {
                userName: "please input user name",
                password: "please input password"
            },
            submitHandler: function (form) {
                var userName = $("#userName").val();
                var password = $("#password").val();
                var authen = userName + password;
                if (authen === localStorage.getItem("authen")) {
                    window.location.href = "manager_user.html"
                }
                else {
                    alert('wrong password');
                    $("#userName").val("");
                    $("#password").val("");
                }
            }
        }
    );
    // 2. user manager
    var checkedID = undefined;
    var users = [
        { id: 0, code: "C109", name: "Doe Ana", address: "Da Nang", email: "join@example.com", userName: "ana_ue" },
        { id: 1, code: "C1020", name: "Moe", address: "Hue", email: "mary@example.com", userName: "moe_ue" },
        { id: 2, code: "C1021", name: "Dooley", address: "Ha Noi", email: "july@example.com", userName: "dooley_123" }
    ];
    // function render users
    var render = function () {
        var tableBody = $("tbody");
        tableBody.html("");
        users.forEach(user => {
            tableBody.append(
                `<tr>
                    <td><input type="radio" name="user" value=${user.id} class="radio"</td>
                    <td>${user.code}</td>
                    <td>${user.name}</td>
                    <td>${user.address}</td>
                    <td>${user.email}</td>
                    <td>${user.userName}</td>
                </tr>`
            )
        });
        // add funtion sau khi render các radio
        $(".radio").click(function () {
            checkedID = +this.value;
            console.log(checkedID)
        })
    };

    // function add new users
    var addNew = function () {
        var name = $("#name").val();
        var code = $("#code").val();
        var address = $("#address").val();
        var email = $("#email").val();
        var userName = $("#userName").val();
        var password = $("#password").val();
        var id = Math.max(...users.map(user => user.id));
        users.push({ name, code, address, email, userName, password, id: id + 1 });
        render();
        $("#name").val("");
        $("#code").val("");
        $("#address").val("");
        $("#email").val("");
        $("#userName").val("");
        $("#password").val("");
    }
    // validate form
    $("#manager").validate({
        rules: {
            name: {
                required: true,
                minlength: 5
            },
            code: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "please enter user name",
                minlength: "greater than 5 characters"
            },
            code: {
                required: "please enter code",
                maxlength: "greater than 3 characters",
            },
            email: "Please enter a valid email address"
        },
        submitHandler: addNew
    })

    // function delete user
    var deleteUser = function () {
        if (checkedID || checkedID == 0) {
            users = users.filter(user => user.id !== checkedID)
            render();
            checkedID = undefined;
        }
        else alert("please check user first")
    }
    $("#delete").click(deleteUser)
    //  function edit user
    var editUser = function () {
        if (checkedID || checkedID == 0) {
            var userCheck = users.find(user => user.id === checkedID)
            $("#name").val(userCheck.name);
            $("#code").val(userCheck.code);
            $("#address").val(userCheck.address);
            $("#email").val(userCheck.email);
            $("#userName").val(userCheck.userName);
            $("#password").val(userCheck.password);
        }
        else alert("please check user first")
    }
    $("#edit").click(editUser)
    // function save
    var saveUser = function () {
        if (checkedID || checkedID == 0) {
            var name = $("#name").val();
            var code = $("#code").val();
            var address = $("#address").val();
            var email = $("#email").val();
            var userName = $("#userName").val();
            var password = $("#password").val();
            users = users.map(user => {
                if (checkedID === user.id) return { name, code, password, address, email, userName, password, id: checkedID }
                else return { ...user }
            })
            render();
            $("#name").val("");
            $("#code").val("");
            $("#address").val("");
            $("#email").val("");
            $("#userName").val("");
            $("#password").val("");
            checkedID = undefined
        }
    }
    $("#save").click(saveUser)
    // function exit
    var exit = function () {
        window.location.href = "index.html"
    }
    $("#exit").click(exit)
    // render html
    render();
})