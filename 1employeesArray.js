const employees = [
    {name: "a", salary: 40000},
    {name: "b", salary: 51000},
    {name: "c", salary: 55000},
    {name: "d", salary: 58000},
    {name: "e", salary: 59000}
]
const updatedArray = employees.reduce((previousValue,currentValue) => {
    let newSalary = currentValue.salary + 1000;    
    previousValue.push({...currentValue, salary: newSalary});
    return previousValue;
},[]);

console.log(updatedArray);

const isEmployeesWithSalaryMorethan50k = employees.some(x => x.salary>50000);

console.log(isEmployeesWithSalaryMorethan50k);

const isAllEmployeeGetsMorethan50k = employees.every(x => x.salary > 50000);

console.log(isAllEmployeeGetsMorethan50k);

console.log((isAllEmployeeGetsMorethan50k == true)?'Best salary paying company':'Not best salary paying company');

const employessWithSalaryMoreThan55k = employees.filter(x => x.salary > 55000);

console.log(employessWithSalaryMoreThan55k);

