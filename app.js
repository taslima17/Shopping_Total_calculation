function updateProduct(product, price, isadd) {
    const itemscount = document.getElementById(product + '-number');
    let itemNo = parseInt(itemscount.value);
    if (isadd == true) {
        itemscount.value = itemNo + 1;
    }
    else if (isadd == false && itemNo > 0) {
        itemscount.value = itemNo - 1;
    }
    itemNo = itemscount.value;
    const total = document.getElementById(product + '-total');
    const totalCost = total.innerText;
    total.innerText = price * itemNo;
    totalshop();
}
//phon update
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct('phone', 1219, true);


})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProduct('phone', 1219, false);

})
//case-update
document.getElementById('cover-plus').addEventListener('click', function () {
    updateProduct('cover', 59, true);


})
document.getElementById('cover-minus').addEventListener('click', function () {
    updateProduct('cover', 59, false);

})

//total cost
function totalshop() {
    const subTotal = document.getElementById('sub-total');


    subTotal.innerText = parseInt(document.getElementById('phone-total').innerText) + parseInt(document.getElementById('cover-total').innerText);
    const subTotalAmount = parseInt(subTotal.innerText);
    const tax = document.getElementById('tax');
    tax.innerText = parseInt(subTotalAmount * 0.05);
    const taxAmount = parseInt(tax.innerText);
    const total = document.getElementById('total');
    const totalAmount = taxAmount + subTotalAmount;
    total.innerText = totalAmount;

}

/* check Out */
document.getElementById('check-out').addEventListener('click', function () {
    document.getElementById('document').style.display = "block";
    document.getElementById('phone').innerText = document.getElementById('phone-number').value;
    document.getElementById('case').innerText = document.getElementById('cover-number').value;
    document.getElementById('payment').innerText = document.getElementById('total').innerText;
    document.getElementById('transaction-id').innerText = Math.round(Math.random() * 10000000);
})