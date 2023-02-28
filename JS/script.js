var buttons = document.querySelectorAll(".btn_add");
var cardNumbers = document.querySelector(".items_number");
var totalPriceOut =document.querySelector(".out_div");
var totalnumber = 0 ;
var totalPrice = 0 ;
const toastLiveExample = document.getElementById('liveToast')

buttons.forEach(function (button) { 
    button.addEventListener("click", function (){
        totalPrice += +(button.getAttribute("price")) ;
        totalPriceOut.innerHTML = totalPrice;
        cardNumbers.innerHTML = ++totalnumber;
        let el = "#element_"+button.getAttribute("number")
        if (document.querySelector(el).style.display == "") {
            document.querySelector(el).style.display = "table-row";
        }
        document.querySelector(el+" .count").innerHTML = +(document.querySelector(el+" .count").innerHTML)+1;
        document.querySelector(el+" .total").innerHTML = +(document.querySelector(el+" .count").innerHTML) * +(document.querySelector(el+" .price").innerHTML);
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    });
})
