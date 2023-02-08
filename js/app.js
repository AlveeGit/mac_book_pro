let isPromoUsed = false;

function calculateTotal() {
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + memoryCost + storageCost + deliveryCost;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = totalPrice.innerText
}

function changeCost(catagory, value) {
    const costCatagory = document.getElementById(catagory + '-cost');
    costCatagory.innerText = value;
    isPromoUsed = false;

}

function changeSelection(catagory) {
    const selectCatagory = document.getElementsByClassName(catagory);
    for (const item of selectCatagory) {
        item.style.backgroundColor = 'white';
        item.style.color = 'black';
    }
}


// memory selection
document.getElementById('8gb-memory').addEventListener('click', function (event) {
    changeSelection('memory');
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    changeCost('memory', 0);
    calculateTotal();
    console.log('8GB');

})
document.getElementById('16gb-memory').addEventListener('click', function (event) {
    changeSelection('memory');
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    changeCost('memory', 180);
    calculateTotal();
})
// storage selection
document.getElementById('256gb-storage').addEventListener('click', function (event) {
    changeSelection('storage');
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    changeCost('storage', 0);
    calculateTotal();
})
document.getElementById('512gb-storage').addEventListener('click', function (event) {
    changeSelection('storage');
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    changeCost('storage', 100);
    calculateTotal();
})
document.getElementById('1tb-storage').addEventListener('click', function (event) {
    changeSelection('storage');
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    changeCost('storage', 180);
    calculateTotal();
})
// delivery selection
document.getElementById('free-delivery').addEventListener('click', function (event) {
    changeSelection('delivery');
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    changeCost('delivery', 0);
    calculateTotal();
})

document.getElementById('fast-delivery').addEventListener('click', function (event) {
    changeSelection('delivery');
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    changeCost('delivery', 20);
    calculateTotal();
})

// Promo 
document.getElementById('promo-btn').addEventListener('click', function () {
    //get promo text
    const promoText = document.getElementById('promo-text');
    const code = promoText.value;

    //check email & password
    if (code.toLowerCase() == 'stevekaku' && isPromoUsed == false) {
        const grandTotal = document.getElementById('grand-total');
        const grandTotalNumber = parseFloat(grandTotal.innerText) ;
        const discountedPrice = grandTotalNumber - (grandTotalNumber*.2);
        grandTotal.innerText = discountedPrice;
        isPromoUsed = true;
        alert('20% Discount Applied Succesfully');
    }
    else{
        alert('Worng Promo Code! Try Again');
    }
    promoText.value = '';
});