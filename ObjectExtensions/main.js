let a = {
    x: 1
};

let b = {
    y: 2
};

Object.setPrototypeOf(a,b);
console.log(a.y);

let studentInfo = {
    name: "Zachary",
    [Symbol.for('age')]: 20,
    course: 'CS'
}

let studAge = studentInfo[Symbol.for('age')];
// console.log(studAge);
// console.log(Object.getOwnPropertySymbols(studentInfo))