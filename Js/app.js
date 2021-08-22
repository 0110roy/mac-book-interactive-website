function updatePrice(priceSetUp) {
    const memoryInput = document.getElementById('memory-price');
    const storageInput = document.getElementById('storage-price');
    const deliveryInput = document.getElementById('delivery-price');

    if (priceSetUp == 'regular-memory') {
        memoryInput.innerText = 0;

    }
    if (priceSetUp == 'premium-memory') {
        memoryInput.innerText = 180;

    }

    if (priceSetUp == 'regular-storage') {
        storageInput.innerText = 0;

    }
    if (priceSetUp == 'storage-512GB') {
        storageInput.innerText = 100;

    }
    if (priceSetUp == 'storage-1TB') {
        storageInput.innerText = 180;

    }
    
    if (priceSetUp == 'regular-00') {
        deliveryInput.innerText = 0;


    }
    if (priceSetUp == 'premium-20') {
        deliveryInput.innerText = 20;

    }
    calculateTotal();
};

function getInputValue(product) {
    const productInput = document.getElementById(product + '-price');
    const productPrice = parseInt(productInput.innerText);
    return productPrice;
}
function calculateTotal() {
    const bestTotal = getInputValue('best');
    const memoryTotal = getInputValue('memory');
    const storageTotal = getInputValue('storage');
    const deliveryTotal = getInputValue('delivery');
    const totalPrice = bestTotal + memoryTotal + storageTotal + deliveryTotal;

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('max-price').innerText = totalPrice;

};


function applyPromo() {
    console.log('genaarating')
    const promoInput = document.getElementById('promo-input')
    const promoCode = promoInput.value;

    if (promoCode == 'stevekaku') {
        const totalpriceInput = document.getElementById('total-price');


        const totalPriceNumber = parseInt(totalpriceInput.innerText);
        const costInPercentaze = (totalPriceNumber / 100) * 20;
        const afterDiscountPrice = totalPriceNumber - costInPercentaze;

        document.getElementById('total-price').innerText = afterDiscountPrice;
        document.getElementById('max-price').innerText = afterDiscountPrice;
    }
};

document.getElementById('regular-memory').addEventListener('click', function () {

    updatePrice('regular-memory');
});

document.getElementById('premium-memory').addEventListener('click', function () {
    updatePrice('premium-memory');

});

document.getElementById('regular-storage').addEventListener('click', function () {

    updatePrice('regular-storage');
});

document.getElementById('premium-storage').addEventListener('click', function () {
    updatePrice('storage-512GB');

});

document.getElementById('extra-premium-storage').addEventListener('click', function () {
    updatePrice('storage-1TB');

});

document.getElementById('delivery-regular').addEventListener('click', function () {
    console.log('cllick')
    updatePrice('regular-00');
});
document.getElementById('delivery-premium').addEventListener('click', function () {
    updatePrice('premium-20');


})