// declare a function
'use strict';
let getPrice = (count,tax) => {
    let price = count * 2 + (1 + tax );
    return price;
}
// console.log(getPrice(4,0.7))
//get the click event
document.addEventListener('click',() => {
    // console.log(this);
})

let invoice = {
    number: 2022,
    process: function() {
        return () => console.log(this.number)
    }
}; 
invoice.process()();

let getCost = () => 20.4;
console.log( typeof getCost)