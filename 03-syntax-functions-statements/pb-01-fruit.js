//PB-01. Fruit 
function fruits (fruit,weight, priceKg) {
    let totalPrice = (weight *(priceKg*10))/10000
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`);
}

fruits('orange', 2500, 1.80)
