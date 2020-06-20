class Students extends Array{

}
let student1 = Students.from(['Zachy','Finna']);
console.log(student1 instanceof Students);
console.log(student1.length);

let newArray = student1.reverse();
console.log(newArray instanceof Array);

// sum using subclassing

class Total extends Array{
    sum() {
        let sum = 0;
        this.map( number => sum += number);
        return sum;
    }
}
let numbers = Total.from([10,20,30]);
console.log(numbers.sum());