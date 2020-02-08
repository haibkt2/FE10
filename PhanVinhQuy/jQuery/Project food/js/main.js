$(document).ready(function () {
    // load food
    foods.forEach(x => {
        $(".list").append(
            `
        <div class="food">
            <img src=${x.img_scr} alt=${x.img_alt}><br>
            <div class="flex">
                <p class="name">${x.name}: </p><p class="price">${x.price.toLocaleString()}</p>
            </div>
            <div class="flex">
                <input type="number" name=${x.input_name} id=${x.input_id}><i class="fa fa-plus-circle"></i>
            </div>
        </div>    
        `
        );
    });
    // chuyển data thành bill
    const bills = foods.map(x => {
        return { name: x.name, price: x.price, amount: 0 };
    });
    var billsFilter;
    // click thêm food
    $(".list i").click(function () {
        if ($(this).siblings("input").val() > 0) {
            let name = $(this).parent().siblings("div").children(".name").html().split(":")[0];
            let amount = parseInt($(this).siblings("input").val());
            bills.forEach(bill => {
                if (bill.name === name) {
                    bill.amount += amount;
                }
            });
            // filter những đối tượng có amount = 0
            billsFilter = bills.filter(bill => bill.amount != 0);
            // load
            load();
            $(this).siblings("input").val("");
            // animate button
            $(this).addClass("animate");
            setTimeout(function () {
                $(".list i").removeClass("animate");
            }, 100);
            console.log(billsFilter);
        }
        else alert("You must input number higher than 0");
    });
    // click xóa bill
    $("tbody").on("click", "i", function () {
        let name = $(this).parent().siblings().html();
        billsFilter.forEach(bill => {
            if (bill.name === name) {
                bill.amount = 0;
            }
        });
        billsFilter = billsFilter.filter(bill => bill.amount != 0);
        load();
        console.log(billsFilter);
    });
    // click tính tổng
    $(".cal").click(function () {
        let total = billsFilter.reduce((sum, bill) => {
            return (bill.price * bill.amount) + sum;
        }, 0);
        $(".total").text("Hóa đơn của bạn là: " + total.toLocaleString()+" đồng");
    });
    // load table 
    function load() {
        // xóa table
        $("tbody").text("");
        // xuất ra table
        billsFilter.forEach(bill => {
            $("tbody").append(
                `
                <tr>
                    <td>${bill.name}</td>
                    <td>${bill.price.toLocaleString()}</td>
                    <td>${bill.amount}</td>
                    <td class="delete"><i class="fa fa-minus-circle"></i></td>
                </tr>
                `
            );
        });
    }
});