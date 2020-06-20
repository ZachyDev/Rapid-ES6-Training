function *process() {
    yield 8000;
    yield 9000;
}
const it = process(); //the result is an itertor
it.next();
it.next()
console.log(it.next())

// conditioned generator

function *randomId() {
    let nextId = 2000;
    while(true) {
        yield(nextId++);
    }
}
// using for-of loop to condion a generator
for( id of randomId()) {
    if( id > 2004) break;
    console.log(id);
}

// another generator

function *students() {
   let student =  yield;
   console.log(`Student name is: ${ student }`);
}
let student = students();
student.next();
student.next('Zachary');

// using genertors in arrays

function *studetList() {
    let studentArray = [yield,yield,yield];
    console.log(studentArray[1]);
}
let studentGen = studetList();
studentGen.next();
studentGen.next('Zachary');
studentGen.next('Finna');
studentGen.next('Doroh');

// more examples on yield

function *product() {
    let value = 4 * (yield 30);
    console.log(value);
}
let getProduct = product();
getProduct.next();
getProduct.next(10);

// more on yield

function *users() {
    yield 'Zachy';
    yield* ['Doroh','Joy','Rodgers'];
    yield 'Finna';
}

const userList = users();
console.log(userList.next().value);
console.log(userList.next().value);
console.log(userList.next().value);
console.log(userList.next().value);
console.log(userList.next().value);
