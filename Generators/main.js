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
const randomNumber = randomId();
randomNumber.next();
randomNumber.next();
console.log(randomNumber.next());