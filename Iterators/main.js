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

const users = {
    [Symbol.iterator]() {
        let user = [];
        return {
            next() {
                return {
                    user: ['Zachary','Finna'],
                    done: false
                   
                }
            }
        }
    }
}
let user1 = users[Symbol.iterator]();
console.log(user1.next().user);