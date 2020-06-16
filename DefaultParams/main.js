'use strict';
const trackOrder = (id,city = 'Nairobi') => {
    return `Check product with id ${ id } in ${ city }`;
    
}
console.log(trackOrder(202021,undefined));

const getTotal = (price = adjustments,adjustments = 20) => {
    console.log(price + adjustments);
}
getTotal(10);
// create a dynamic function
let getCost = new Function('price = 20', 'return price');
console.log(getCost())