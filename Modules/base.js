const userInfo = {
    name: 'Zachary Moseti',
    age: 20,
    output(){
        return `Hello ${ this.name } ${ this.age }`; 
    }
}

class Student{
    constructor(name,course) {
        this.name = name;
        this.course = course;
    }
    showStudent() {
        console.log(`${ this.name } ${ this.course }`);
    };
}
// class2
class Student2 extends Student{
    
}
let student1 = new Student('Finna','ACS');
// student1.showStudent();
