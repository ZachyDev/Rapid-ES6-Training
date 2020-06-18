console.log(Number.parseInt === parseInt);
console.log(Number.parseFloat === parseFloat);

const s = 'NaN';
console.log(isNaN(s));
console.log(Number.isNaN(s));

const a = '8000';
console.log(isFinite(a));
console.log(Number.isFinite(a));

let sum = 505.50;
console.log(Number.isInteger(sum));