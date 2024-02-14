// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

// Generics with functions - It helps to more generalized methods which more accurately represent the types used and returned.

function EmployeeData<type_parameter>(parameter: type_parameter){
    return parameter
}
let Name = EmployeeData<string>("Harry Smith")
let Id = EmployeeData<string>("EMP/SDE/240203")
let Role = EmployeeData<string>("Software Developer")
let Salary = EmployeeData<number>(100000)

console.log("Employee Name : "+Name)
console.log("Employee ID : "+Id)
console.log("Position / Role : "+Role)
console.log("Salary : "+Salary)
// TypeScript can also infer the type of the generic parameter from the function parameters.


// Generic function which returns an array->

let displayArray = <type_parameter>(data_item: type_parameter[]): type_parameter[] => {
    return new Array<type_parameter>().concat(data_item);
}

let numbersArray = displayArray<number>([1,2,3,4,5,6])
console.log(numbersArray)