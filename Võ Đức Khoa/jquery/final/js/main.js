
$(".accordion-item-header ").on("click",function(){
    // $(this).toggleClass("active");
    $(this).siblings().toggle("1000");
    $(this).children("ion-icon").toggleClass("active")
})
// $(".btn-register").click(function(){
//     $(this).parent().siblings(".register").toggleClass("active1");
//     $(this).parent().siblings(".login").toggleClass("active2");
//     $(this).parent().toggleClass("right");
//     $(this).parent().toggleClass("left");
//     if($(this).is("div.btn-register")){
//         $(this).css({"pointer-events":"none"})
//         $(this).siblings().css({"pointer-events":"fill"})        
//     }
// })
// $(".btn-login").click(function(){
//     $(this).parent().siblings(".register").toggleClass("active1");
//     $(this).parent().siblings(".login").toggleClass("active2");
//     $(this).parent().toggleClass("left");
//     $(this).parent().toggleClass("right");
//     if($(this).is("div.btn-login")){
//         $(this).css({"pointer-events":"none"}) 
//         $(this).siblings().css({"pointer-events":"fill"})        
//     }
// })
//event click
$(".button-box").on("click",".btn-click",function(){
    $(this).parent().siblings(".register").toggleClass("active1");
    $(this).parent().siblings(".login").toggleClass("active2");
    $(this).css({"pointer-events":"none"}) 
    $(this).siblings().css({"pointer-events":"fill"})        
    $(this).parent().toggleClass("left");
    $(this).parent().toggleClass("right");    
})
//validate register
$(".register").validate({
    rules : {
        e : {
          required : true,
          email : true
        },
        re_e : {
          equalTo : "#e"
        },
        password : {
            required : true,
            minlength : 6
        },
        re_password : {
            equalTo : "#password"
        }
    },
    messages :{
          e : {
            required : "Please enter email",
            email : "along type of email"
          },
          re_e : {
            equalTo : "confirm email above"
          },
         password : {
             required : "Please enter password",
             minlength : "least {0} syntax"
         },
         re_password : "please at the same password"
    }
})
//validate login
$(".login").validate({
    rules : {
        email :{
            required : true,
            email : true
        },
        pass : "required"
    },
    messages :{
         email : {
             required : "Please enter email",
             email : "along type of email"
         },
         pass : "Please enter password"
    }
})
//event focus
$(".focus").on("focus",function(){
   $(this).siblings("h5").attr("id","event");
})
$(".focus").on("blur",function(){
    if($(this).val().trim() === ""){
        $(this).siblings("h5").removeAttr("id","event");
    }
 })
 // create account
var members = [
    {    
        email : "khoa28101998@gmail.com",
        password : "intelcore2"    
    },
    {
        email : "admin2@gmail.com",
        password : "admin2"
    },
    {
        email : "admin3@gmail.com",
        password : "admin3"
    },
    {
        email : "admin4@gmail.com",
        password : "admin4"
    },
    {
        email : "admin5@gmail.com",
        password : "admin5"
    }
]
//convert json and save on local storage
function backUp(){
     members.forEach(member => {
         localStorage.setItem(member.email, JSON.stringify(member));
     })
}
backUp();

//get members on local storage
var listMember = [];
function getMember(){
    const keys = Object.keys(localStorage);
        keys.forEach( key => {
           listMember.push(JSON.parse(localStorage.getItem(key)));
        })
} 
// validate form login and into index.html 
var list = [];
var key = "";
$("#login").click(function(){
    
    const email = $("#email").val();
    const pass = $("#pass").val();
    if($(".login").valid()){
        const data_user = localStorage.getItem(email);//chuyen thanh cai json (string)
        const data_users = JSON.parse(data_user);
        if(data_user === null) alert("Wrong password or email");
        else{
            if(email === data_users.email && pass === data_users.password){   
                getMember();   
                listMember.filter(member => member.email === email && member.password === pass ).forEach(member => {                
                document.cookie=`${member.email}`;        
                })
            
                $(".login").attr("action","index.html")
                                                          
            }
            else alert("Wrong password or email")
        }
    }   
})

$("#register").click(function(){
    const newEmail = $("#e").val();
    const newPassword = $("#password").val();
    if($(".register").valid()){
        const newUser = {
            email : newEmail,
            password : newPassword
        }
        localStorage.setItem(newUser.email,JSON.stringify(newUser));
    }
})
function show(){
$("#show").append(`<h5>${document.cookie}</h5>`)
}
show();


