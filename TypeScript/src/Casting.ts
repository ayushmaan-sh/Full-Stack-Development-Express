// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
// Casting is the process of overriding a type.

//CAsting with as - A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

let x:unknown = 12948
console.log(x as string)
console.log((x as string).length)
// Casting doesn't actually change the type of the data within the variable, for example the above code will not work as expected since the variable x is still holds a number.

// Using <> works the same as casting with as.

let y:unknown = 'Hello TypeScript'
console.log((<string>y).length)

// Force casting ->  

{
    let x = 'Hello TypeScript';
    console.log('Example of force casting : '+((x as unknown)as string).length)
}

// Type Assertion for User-Defined Types:

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let obj: any = new Animal("Dog");
let dog = obj as Animal; // User-defined type assertion
console.log(dog.name); // Accessing the property of the user-defined type
