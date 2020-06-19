// iterators
const  nums = [100,200,300];
console.log(typeof nums[Symbol.iterator]);

const it = nums[Symbol.iterator]();
it.next();
it.next();
// it.next(); the iterator is now exhausted
console.log(it.next());