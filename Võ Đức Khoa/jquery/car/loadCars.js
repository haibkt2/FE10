  
var dataItems = localStorage.getItem('item');
var items = JSON.parse(dataItems)
function loadItems(){
        items.map( item => {
            $('#content').append( `
            <div class = "car">
            <img src = ${item.imageUrl} alt = ${item.imageAlt}></br>
            <input type = 'number' id = ${item.inputId} name = ${item.inputId}>
            <i class="fas fa-plus-circle"></i></br>
            <span class = 'name'>${item.nameCar}</span><span class = 'price'>${item.price} $</span></br>
            </div>
            `)
        })
     
     }
loadItems();

// content bill
var filterBills = [];
const bills = cars.map(item => {
   return {
       nameCar : item.nameCar,
       price : item.price,
       quantity : 0
   }
})
$('#content i').click(function(){
    var tag_i = $(this);
    var value = parseInt(tag_i.siblings('input').val());
    var name = tag_i.siblings('.name').html(); // thuc hien dieu kien update arr bill
    if(value > 0)
    {
        bills.forEach( item => {
            if(item.nameCar === name){
               item.quantity = item.quantity + value;
            }
        })
        tag_i.addClass('aminate');
        setTimeout(function(){
            $('#content i').removeClass('aminate')
        },100)
        //loc nhung object de hien thi tren bill
        filterBills = bills.filter( item => item.quantity !== 0)
        loadBills(); 
    }
    else alert("nhap du lieu > 0")
})
$('tbody').on('click','i',function(){
        var tag_ = $(this);
        var value = parseInt(tag_.parent().siblings('.quantity').html());
        var name = tag_.parent().siblings('.name').html();
        filterBills.forEach( item =>{
            if(name === item.nameCar) 
            {
                if( item.quantity > 1) item.quantity = value - 1;
                else filterBills.pop(item);
            }
            
        })
        loadBills();       
    })
$('button').on('click',function(){
   var totalPrice = filterBills.reduce( (total, item) =>total + item.price*item.quantity ,0)
   $('p').text(`Total is: ${totalPrice}`)
})
function loadBills(){
    $('tbody').text('')
    filterBills.forEach( item => {
        $('tbody').append(`
        <tr class= 'delete'>
        <td class = 'name'>${item.nameCar}</td>
        <td>${item.price}</td>
        <td class = 'quantity'>${item.quantity}</td>
         <td><i class="fas fa-minus-circle"></i></td>
        </tr>`)
    })
}

