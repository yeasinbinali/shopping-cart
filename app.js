function productUpdateInput(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;
    }else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
// update total
const caseTotal = document.getElementById(product + '-total');
caseTotal.innerText = productNumber * price;
calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    productUpdateInput('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    productUpdateInput('phone', 1219, false);
})

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    productUpdateInput('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    productUpdateInput('case', 59, false);
})
