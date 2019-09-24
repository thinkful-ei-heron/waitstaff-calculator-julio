const store = {
    subTotal: 0.00,
    tip: 0.00,
    total: 0.00,
    tipTotal: 0.00,
    mealCount: 0,
    avgTipPerMeal: 0.00
}

// function that renders the values onto the screen
const render = function() {
    let html = `
    
    `
}

// function that updates the info in store
const updateData = function() {
    $('.big-boi-box').on('submit', e => {
        e.preventDefault();
        const mealPrice = $('.base-meal').val();
        const taxRate = $('tax-rate').val();
        const tipPerc = $('tip-percentage').val();
        $('.base-meal').val('');
        $('tax-rate').val('');
        $('tip-percentage').val('');
        calcDate(mealPrice,taxRate,tipPerc);
    })
    console.log('calcData is running');
}

// function that handles the inputted information
const calcData = function(mealPrice,taxRate,tipPerc) {
    const newTaxRate = taxRate/100;
    const newTip = tipPercentage/100;
    store.subTotal = mealPrice + (mealPrice * newTaxRate);
    store.tip = mealPrice * newTip;
    store.total = store.subTotal + store.tip;
    totalEarnings();
    custCharges();
}
// function that calculates right side 
const totalEarnings = function() {
    store.tipTotal += store.tip;
    store.mealCount++;
    store.avgTipPerMeal = store.tipTotal / store.mealCount;
    calcEarnings();
}

const calcEarnings = function() {
    $('.customer-charges').html(`
        <h2>My Earnings Info</h2>
        <h3 class="tip-total">Tip Total : $ ${store.tipTotal}</h3>
        <h3 class="meal-amt">Meal Count : ${store.mealCount}</h3>
        <h3 class="avg-tip">Average Tip Per Meal : $ ${store.avgTipPerMeal}</h3>
    `);
}

const custCharges = function() {
    $('.earning-info').html(`
    <h2>Customer Charges</h2>
    <h3 class="sub-total">Subtotal : $ ${store.subTotal}</h3>
    <h3 class="tip-amt">Tip : $ ${store.tip}</h3>
    <h3 class="total-cost">Total : $ ${store.total}</h3>
    `);
}

// function that handles reset button
const reset = function() {
    $('reset-button').on
}

// function that handles all other funcitons
const callAllOthers = function() {
    updateData();
    //render();
    calcData();
    updateData();
    console.log('callAll others running')
}

$(callAllOthers);
