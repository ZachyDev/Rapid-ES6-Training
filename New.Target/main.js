class Student {
    constructor() {
        // console.log( typeof new.target );
        console.log(new.target.getStudentId());
        // console.log(new.target);
    }
}
// let student = new Student();

class RegisteredStudent extends Student {
    static getStudentId() { return 'COM/015/18'}

}
const student1 = new RegisteredStudent();

