// // iterators
// const  nums = [100,200,300];
// console.log(typeof nums[Symbol.iterator]);

// const it = nums[Symbol.iterator]();
// it.next();
// it.next();
// // it.next(); the iterator is now exhausted
// console.log(it.next());

// Object of users 
// const users = [
//    'Zachy',
//    'Finna',
//    'Doroh'
// ]

// const showAllUsers = (iter) => {
//    return iter.next();

// }
// console.log(showAllUsers(users[Symbol.iterator]()));

let idMaker = {
    [Symbol.iterator]() {
        let nextId = 8000;
        return {
            next() {
                return{
                value: nextId++,
                done: false
            }
        }
    }
    }
}

let it = idMaker[Symbol.iterator]();
console.log(it.next().value);
console.log(it.next().value);