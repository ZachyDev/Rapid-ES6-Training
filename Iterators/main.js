// iterators
const  nums = [100,200,300];
console.log(typeof nums[Symbol.iterator]);

const it = nums[Symbol.iterator]()
it.next();
it.next();
// it.next(); the iterator is now exhausted
console.log(it.next());

const users = [
   'Zachy',
   'Finna',
   'Doroh'
];

const showAllUsers = (iter) => {
   return iter.next();

}
console.log(showAllUsers(users[Symbol.iterator]()));

const userList = {
    [Symbol.iterator]() {
        let users = [];
        return {
            next() {
                return {
                    value: ['Moseti','Zachary','Finna'],
                    done: false
                }
            }
        }
    }
}
let userAll = userList[Symbol.iterator]();
console.log(userAll.next().value);
