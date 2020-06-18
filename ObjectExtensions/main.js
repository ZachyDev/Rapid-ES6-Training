let a = {
    x: 1
};

let b = {
    y: 2
};

Object.setPrototypeOf(a,b);
// console.log(a.y);

let studentInfo = {
    name: "Zachary",
    [Symbol.for('age')]: 20,
    course: 'CS'
}
let student1 = {
    name: "Dorothy",
    [Symbol.for('age')]: 21,
    course2: "Software Engineering"
}
Object.setPrototypeOf(studentInfo,student1);
console.log(studentInfo.course2);
// let studAge = studentInfo[Symbol.for('age')];
// console.log(studAge);
// console.log(Object.getOwnPropertySymbols(studentInfo))

let user1 = { name: 'Zachy' };
let user2 = { name2: 'Finna' };
Object.defineProperty(user2,'name3', {
    value: 'Doroh',
    enumerable: true
});

let usersContainer = {};
Object.assign(usersContainer,user1,user2);
console.log(usersContainer);

let amount = NaN;
// console.log(amount === amount) ;
console.log(Object.is(amount,amount));


