// create a new symbol
const eventSymbol = Symbol('resize the event');
// console.log(typeof eventSymbol);
// console.log(eventSymbol.toString()); human readble format

 const CALCULATE_EVENT_SYMBOL = Symbol('Calculate event');
//  console.log(CALCULATE_EVENT_SYMBOL.toString()); a Symbol can be assigned to const,let and var


const s = Symbol('event');
const s2 = Symbol('event');
// console.log(s === s2); shows false,symbols create a unique id

// built inn registry
let s = Symbol.for('event');
console.log(s.toString());