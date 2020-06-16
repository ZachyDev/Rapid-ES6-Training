// let,const - does away with hoisting
'use strict';
let productId = 12; 
{
    let productId = 2000;
}
console.log(productId);
// var productId = 12; brings the issue of hoisting
// let productId = 12; //refernce error

