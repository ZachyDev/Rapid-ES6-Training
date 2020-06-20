function *process() {
    yield 8000;
    yield 9000;
}
const it = process();
it.next();
it.next()
console.log(it.next())