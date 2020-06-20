const employee1 = { name: 'Zachy'};
const employee2 = { name: 'Finna'};

const employees = new Map();
employees.set(employee1,'ABC');
employees.set(employee2,'123');
console.log(employees.get(employee1));
employees.delete(employee2)
console.log(employees.size); 