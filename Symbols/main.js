// create a new symbol
const eventSymbol = Symbol('resize the event');
// console.log(typeof eventSymbol);
console.log(eventSymbol.toString()); //human readble format

 const CALCULATE_EVENT_SYMBOL = Symbol('Calculate event');
//  console.log(CALCULATE_EVENT_SYMBOL.toString()); a Symbol can be assigned to const,let and var


const s = Symbol('event');
const s2 = Symbol('event');
// console.log(s === s2); shows false,symbols create a unique id

// built inn registry
let s3 = Symbol.for('event');
let s4 = Symbol.for('eventq');
console.log(s3 === s4);
// console.log(s3.toString());

let s5 = Symbol.for('event');
let description = Symbol.keyFor(s5);
console.log(description);

// using Symbols in objects

const student = {
    name: 'Zachary',
    [Symbol.for('course')]: 'Computer Science'
}
let studCourse = student[Symbol.for('course')];
console.log(studCourse);