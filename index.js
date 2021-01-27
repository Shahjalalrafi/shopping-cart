//add section
const addMobile = document.getElementById('mobile-plus')
addMobile.addEventListener('click', function() {
    let perMobile = 1219
    const mobileCount = document.getElementById('mobile-count').value
    const mobileFloat = parseFloat(mobileCount)
    const mobileNumber = mobileFloat + 1
    document.getElementById('mobile-count').value = mobileNumber

    // const mobileAmount = document.getElementById('mobile-amount').innerText
    const total = perMobile * mobileNumber
    document.getElementById('mobile-amount').innerText = total

    const subtotal = document.getElementById('sub-total').innerText
    const subtotals = parseFloat(subtotal)
    const totals = subtotals + perMobile
    document.getElementById('sub-total').innerText = totals
    

    document.getElementById('total').innerText = totals
})

//minus

const minusMobile = document.getElementById('mobile-minus')
minusMobile.addEventListener('click', function () {
    let perMobile = 1219
    const mobileCount = document.getElementById('mobile-count').value
    const mobileFloat = parseFloat(mobileCount)
    const mobileNumber = mobileFloat -1
    document.getElementById('mobile-count').value = mobileNumber
    
    const mobileAmount = document.getElementById('mobile-amount').innerText
    const total = mobileAmount - perMobile
    document.getElementById('mobile-amount').innerText = total

    const subtotal = document.getElementById('sub-total').innerText
    const subtotals = parseFloat(subtotal)
    const totals = subtotals - perMobile
    document.getElementById('sub-total').innerText = totals

    document.getElementById('total').innerText = totals
})

//case add
const addCase = document.getElementById('case-plus')
addCase.addEventListener('click', function() {
    const perCase = 59
    const caseCount = document.getElementById('case-count').value
    const caseFloat = parseFloat(caseCount)
    const caseNumber = caseFloat + 1
    document.getElementById('case-count').value = caseNumber

    // const caseAmount = document.getElementById('case-amount').innerText
    const total = perCase * caseNumber
    document.getElementById('case-amount').innerText = total

    const subtotal = document.getElementById('sub-total').innerText
    const subtotals = parseFloat(subtotal)
    const totals = subtotals + perCase
    document.getElementById('sub-total').innerText = totals

    document.getElementById('total').innerText = totals
})

//case minus
const minusCase = document.getElementById('case-minus')
minusCase.addEventListener('click', function() {
    const perCase = 59
    const caseCount = document.getElementById('case-count').value
    const caseFloat = parseFloat(caseCount)
    const caseNumber = caseFloat - 1
    document.getElementById('case-count').value = caseNumber


    const caseAmount = document.getElementById('case-amount').innerText
    const total = caseAmount - perCase
    document.getElementById('case-amount').innerText = total

    const subtotal = document.getElementById('sub-total').innerText
    const subtotals = parseFloat(subtotal)
    const totals = subtotals - perCase
    document.getElementById('sub-total').innerText = totals

    document.getElementById('total').innerText = totals
})

//check-out

const checkOut = document.querySelector('.check-out')
checkOut.addEventListener('click', function() {
    const layOut = document.querySelector('.container')
    layOut.style.display = 'none'
    const footer = document.getElementById('footer-section')
    footer.style.display = 'block'
})