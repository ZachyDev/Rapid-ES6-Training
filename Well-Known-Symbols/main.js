let Store = function() {

};
// toStringTag symbol
Store.prototype[Symbol.toStringTag] = 'Eldoret'
let storeInfo = new Store();
console.log(storeInfo.toString());

// concat symbol
let values = [ 20,40,60 ];
values[Symbol.isConcatSpreadable] = false;
console.log([].concat(values));

// Symbol.toPrimitive 

values[Symbol.toPrimitive] = (hint) => {
    console.log(hint);
    return 30;
}
let sum = values + 1000;
console.log(sum);