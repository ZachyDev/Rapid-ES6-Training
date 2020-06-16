const developers = ['Zachy','Chisom','Rodgers'];
const [web,android,ml] = developers;
console.log(web,android,ml);

const salary = [10000,20000,[50000,100000],200000];
const [low,high,[actualLow,actualHigh],higher] = salary;
console.log(actualLow) 

// destructuring objects
const userInfo = {
    name: 'Doroh',
    age: 20,
    course: 'EDS'
};
const { name: userName,age: userAge,course: userCourse } = userInfo;
console.log(userName,userAge,userCourse);