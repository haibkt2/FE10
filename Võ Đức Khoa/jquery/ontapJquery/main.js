// chuc nang cua bottom save and show
var users = [];
$(".save").click(function(){
    var name = $("#name").val();
    var address = $("#address").val();
    var password = $("#password").val();
    var code = $("#code").val();
    var email = $("#email").val();
    var username = $("#username").val();
    const user = {
        id : 0,
        name : name,
        address : address,
        password : password,
        code : code,
        email : email,
        username : username
    }
    users.push(user);
    showUser();
   
})
function showUser(){
    users.forEach(item => {
        $("#tbody").append(
            `
                <tr>
                    <th style="width:45px"></th>
                    <th>${item.code}</th>
                    <th>${item.name}</th>
                    <th>${item.address}</th>
                    <th>${item.email}</th>
                    <th>${item.username}</th>
                </tr>
            `
        )
    })
}