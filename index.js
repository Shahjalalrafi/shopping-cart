// variable
let perMobile = 1219
let perCase = 59

//decrease mobile 
const addMobile = document.getElementById('mobile-plus')
addMobile.addEventListener('click', function() {
    increase('mobile-count', 'mobile-amount', perMobile)
})

//decrease mobile
const minusMobile = document.getElementById('mobile-minus')
minusMobile.addEventListener('click', function () {
    decrease('mobile-count', 'mobile-amount',perMobile)
})

//increase case
const addCase = document.getElementById('case-plus')
addCase.addEventListener('click', function() {
    increase('case-count', 'case-amount', perCase)
})

//decrease case
const minusCase = document.getElementById('case-minus')
minusCase.addEventListener('click', function() {
    decrease('case-count', 'case-amount', perCase)
})

//cross btn mobile
const crossBtn1 = document.getElementById('cross-btn1')
crossBtn1.addEventListener('click', function() {
    crossBtn('.cart-item1', 'mobile-amount')
})

//cross btn case
const crossBtn2 = document.getElementById('cross-btn2')
crossBtn2.addEventListener('click', function() {
    crossBtn('.cart-item2','case-amount')
})

//increase functanility
function increase(CountId, AmountId, price) {
    const Count = document.getElementById(CountId).value
    const countFloat = parseFloat(Count)
    const CountNumber = countFloat + 1
    document.getElementById(CountId).value = CountNumber

    const amount = document.getElementById(AmountId).innerText
    const total = price * CountNumber
    document.getElementById(AmountId).innerText = total

    const subtotal = document.getElementById('sub-total').innerText
    const subtotals = parseFloat(subtotal)
    const totals = subtotals + price
    document.getElementById('sub-total').innerText = totals
    

    document.getElementById('total').innerText = totals
}

//decrease Functanility
function decrease(mobileCountid, mobileAmountId,price) {
    const productCount = document.getElementById(mobileCountid).value
    const productFloat = parseFloat(productCount)
    const productNumber = productFloat -1
    document.getElementById(mobileCountid).value = productNumber
    
    const productAmount = document.getElementById(mobileAmountId).innerText
    const total = productAmount - price
    document.getElementById(mobileAmountId).innerText = total

    const subtotal = document.getElementById('sub-total').innerText
    const subtotals = parseFloat(subtotal)
    const totals = subtotals - price
    document.getElementById('sub-total').innerText = totals

    document.getElementById('total').innerText = totals
}


//for all crossbtn 
function crossBtn(cartid,id) {
    const cartItem = document.querySelector(cartid)
    cartItem.style.display = 'none'

    const subTotal = document.getElementById('sub-total').innerText
    const mobileAmount = document.getElementById(id).innerText
    const total = subTotal - mobileAmount
    document.getElementById('sub-total').innerText = total

    document.getElementById('total').innerText = total
}

//check-out

const checkOut = document.querySelector('.check-out')
checkOut.addEventListener('click', function() {
    const layOut = document.querySelector('.container')
    layOut.style.display = 'none'
    const footer = document.getElementById('footer-section')
    footer.style.display = 'block'
})