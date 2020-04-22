
var users ;
function getUser(){
   var usered = localStorage.getItem("usered");
   users = (usered == null) ? [] : JSON.parse(usered);
}
getUser();
showUser();
//common func save on localStrorage
function save(){
    var usered = JSON.stringify(users);
    localStorage.setItem("usered",usered);
}
// chuc nang cua button add
$(".add").click(function(){
    if( $("#code").val().trim() != "" ){
   //get value form tag input
   var name = $("#name").val();
   var address = $("#address").val();
   var password = $("#password").val();
   var code = $("#code").val();
   var email = $("#email").val();
   var username = $("#username").val();
   // luu vao mot object
   const user = {
       name : name,
       address : address,
       password : password,
       code : code,
       email : email,
       username : username
   }
   //truyen vao array
   users.push(user);
   //reset form input
   $("#form").trigger("reset");   
   showUser();
   save();
}
    else alert('bat buoc nhap code');  
   
})
// chuc nang show
function showUser(){
    $("#tbody").text('');
    $('#tbody').append(`
    <tr style="background-color: #39d38f">
                    <th style="width:45px"></th>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>UserName</th>
                </tr>
    `)
    users.forEach(item => {
        $("#tbody").append(
            `
                <tr>
                    <td style="width:45px"><input type = "radio" id = "select" name="select"></td>
                    <td>${item.code}</td>
                    <td id ="itemName">${item.name}</td>
                    <td>${item.address}</td>
                    <td>${item.email}</td>
                    <td>${item.username}</td>
                </tr>
            `
        )
    })
}
// chuc nang cua button delete
//tao bien trung gian giua checkbox va delete button
var temp = "";
var check = false;
$("#tbody").on("click","input",function(){
    check = true;
    var checkbox = $(this);
    temp = checkbox.parent().next().text();       
})
//event xoa object
var filter = [];
$(".delete").click(function(){
   if(check == true){
         filter = users.filter(item => {
            return item.code != temp;
        })
        users = [...filter];
        showUser();
        check = false;
        save();
    }
   else alert("hay chon user")
})  
//chuc nang edit
$(".edit").click(function(){   
   if(check == true){
    if($(this).is(".edit")){
        var btnSave = $(this).next();
        btnSave.css({"pointer-events":"all","border" : "2px","background-color":"orange"});
    }
    users.forEach(item => {
        if(item.code == temp){
            $("#name").val(`${item.name}`)
            $("#code").val(`${item.code}`)
            $("#email").val(`${item.email}`)
            $("#address").val(`${item.address}`)
            $("#password").val(`${item.password}`)
            $("#username").val(`${item.username}`)
        }
    })
    check == false;
    alert("save de luu data");
   }
   else alert("hay chon user");
})
// chuc nang luu cua button save
$(".save").click(function(){
        $(this).css({"pointer-events": "none",
           "background-color" : "aliceblue",
            "border": "none"})
        users.forEach(item => {
            if(item.code == temp){
                item.code = $("#code").val();
                item.name = $("#name").val();
                item.address = $("#address").val();
                item.password = $("#password").val();
                item.email = $("#email").val();
                item.username = $("#username").val();      
                
            }
       })
       $("#form").trigger("reset");  
       showUser(); 
       var listUser = JSON.stringify(users);
       localStorage.setItem("usered",listUser);
       console.log(users);

   })

//chuc nang exit save current
$(".exit").click(function(){
    $("#form").trigger("reset");  
})

