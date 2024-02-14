"use strict";
function EmployeeData(parameter) {
    return parameter;
}
let Name = EmployeeData("Harry Smith");
let Id = EmployeeData("EMP/SDE/240203");
let Role = EmployeeData("Software Developer");
let Salary = EmployeeData(100000);
console.log("Employee Name : " + Name);
console.log("Employee ID : " + Id);
console.log("Position / Role : " + Role);
console.log("Salary : " + Salary);
let displayArray = (data_item) => {
    return new Array().concat(data_item);
};
let numbersArray = displayArray([1, 2, 3, 4, 5, 6]);
console.log(numbersArray);
