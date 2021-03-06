// let salary = Array(100000);
// console.log(salary.length); //outputs 100000

// solution in es6
let salary = Array.of(10000);
console.log(salary.length);
// example2
let students = Array.of('Zachary','Doroh','Finna');
console.log(students[0]);

// Array.from demo  - Array.from creates a new array based on the current array

let amounts = [1000,2000,3000];

// let amountIncrease = Array.from(amounts, amount => amount + 100);
let amountIncrease = Array.from(amounts, (amount) => {
    return amount + 200;
})
console.log(amountIncrease)

// Array.from in objects

let randomNumbers = [20,40,80];
let modifiedNumbers = Array.from(randomNumbers,function(number) {
    return number + this.modification;
},{ modification: 50});
console.log(modifiedNumbers);


// .fill demo

let incomes = [10000,20000,40000];
incomes.fill(30000,-1);
console.log(incomes);

// .find

let filteredIncome = incomes.find(income => income === 20000)
console.log(`Filterd income: ${ filteredIncome }`);

// copyWithin
let wages = [200,500,700];
wages.copyWithin(2,0);
console.log(wages);

// .entries
let ids = ['A','B','C'];
console.log(...ids.entries());
console.log(...ids.keys());
console.log(...ids.values())