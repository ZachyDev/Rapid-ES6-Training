let userName = 'Zachary';
let age = 20;

const userObj = {
    userName,
    age,
    "outputUser"() {
        return `Hello ${ this.userName }, you are aged ${ this.age}.`;
    }
};
console.log(userObj);  
console.log(userObj["outputUser"]()) ; 