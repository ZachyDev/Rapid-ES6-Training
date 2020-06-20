let users = new Set();
users.add('Zachy');
users.add('Doroh');
users.add('Zachy');
console.log(users.size);

// array of sets
let students = new Set([
    'moseti',
    'cleah',
    'finna'
]);
console.log(`The size of the array is: ${ students.size }`);

const newStudents = new Set(students);
console.log(`The size of the new students is ${ newStudents.size }`);

// checking the availability of an ellement in a set
console.log(newStudents.has('moseti'));
console.log(newStudents.has('doroh'));

console.log(...students.keys());
console.log(...students.entries());
console.log(...students.values());

// sets in objects
const perks = new Set([
    { id: 800 },
    { id: 800 }
]);
console.log(perks.size);

const list = new Set([
    1,
    '1'
]);
console.log(list.size)

// Weak sets
let car1 = { name: 'mercedezes' };
let car2 = { name: 'premio' };
const cars = new WeakSet([car1,car2]);
car1 = null;
// console.log(cars.size);
console.log(cars.has(car1));