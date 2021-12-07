const employees = [
    {name: "a", salary: 40000},
    {name: "b", salary: 51000},
    {name: "c", salary: 55000},
    {name: "d", salary: 58000},
    {name: "e", salary: 59000}
]

const sumSalary = employees.reduce((previousValue,currentValue) => {
    previousValue += currentValue.salary;
    return previousValue;
},0);

const avgSalary = sumSalary / (employees.length);
console.log(avgSalary);

const salaryGreaterThanAvg = employees.filter(x => x.salary>avgSalary);

console.log(salaryGreaterThanAvg);