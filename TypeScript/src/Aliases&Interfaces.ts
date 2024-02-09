// TypeScript allows types to be defined separately from the variables that use them.

// Aliases and Interfaces allows types to be easily shared between different variables/objects.

// Type Aliases
// Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type Name = string;
type Age = number;
type Job_Role = string;
type company = string;

type employeeDetails = {
    name: Name,
    age: Age,
    role: Job_Role,
    Company: company
}

const employeeName: Name = 'Ayushmaan Shukla'
const employeeAge: Age = 20
const employeeRole: Job_Role = 'Software Engineer'
const employeeCompany: company = 'EPAM Systems'

const details: employeeDetails = {
    name: employeeName,
    age: employeeAge,
    role: employeeRole,
    Company: employeeCompany
}

console.log(details)

//Another Example

type CarName = string
type CarYear = number
type CarModel = string

type CarDetails = {
    Name: CarName,
    year: CarYear,
    model: CarModel
}

const carName = 'Tesla'
const carYear = 2015
const carModel = 'X'

const car: CarDetails = {
    Name: carName,
    year: carYear,
    model: carModel
}
console.log(car)

// Interfaces : They are similar to type aliases, except they only apply to object types.

interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
}

console.log(rectangle)

// Extending Interfaces : It means you are creating a new interface with the same properties as the original, plus something new.

interface ColoredRectangle extends Rectangle {
    color: string
}

const colorRectabgle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: 'red'
}