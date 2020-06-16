'use strict';
let showCaterories = (productId, ...categories) => { 
    console.log(categories instanceof Array);
    console.log(categories)
}
showCaterories(213,'laptops','au dio systems');
// showCaterories(123) will still create an empty array 
const prices = [20,30,1000,50];
const maxPrice = Math.max(...prices);
console.log(maxPrice);
// new array
const newPrices = [...prices];
console.log(newPrices);

const maxCode = Math.max(..."23789");
console.log(maxCode);