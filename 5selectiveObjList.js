const employees = [
    {name: "a", salary: 40000, department: 'IT'},
    {name: "b", salary: 51000, department: 'HR'},
    {name: "c", salary: 55000, department: 'Finance'},
    {name: "d", salary: 58000, department: 'Systems'},
    {name: "e", salary: 59000, department: 'immigration'}
]
//let employeeCopy = [];
//Object.assign(employeeCopy,employees);
//console.log(employeeCopy)
const employeeList = employees.reduce((previousValue, currentValue) => {
    const {name,department} = currentValue;
    previousValue.push({name,department});
    return previousValue;

},[])
console.log(employeeList);