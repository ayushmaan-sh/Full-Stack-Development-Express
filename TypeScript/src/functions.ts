// TypeScript has a specific syntax for typing function parameters and return values.
// Functions in TypeScript are quite similar to JavaScript functions but with the added benefit of type annotations and type inference, which help in catching errors during development.

// return type function :
// In TypeScript, as in JavaScript, the return statement is used within functions to specify the value that the function should return when it is called. When the function encounters a return statement, it immediately stops executing and returns the specified value to the caller.

function getTime(): number {
    return new Date().getTime();
}

// If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

// Void Return Type : The type void can be used to indicate a function doesn't return any value.

function printHello(): void {
    console.log('Hello TypeScript')
}

// Parameters : Function parameters are typed with a similar syntax as variable declarations.

function multiply(a: number, b: number) {
    return a * b
}

console.log('Parameters example : ' + multiply(5, 2))

// Optional Parameters : By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0)
}
console.log('Optional Parameters example without c : ' + add(2, 2))
console.log('Optional Parameters example with c : ' + add(2, 2, 4))

//Default Parameters: For parameters with default values, the default value goes after the type annotation
// TypeScript can also infer the type from the default value.

{
    function add(value1: number, value2: number = 10) {
        return value1 + value2
    }
    console.log('Default parameter example : ' + add(2 + 2))
}

// Named Parameters : Typing named parameters follows the same pattern as typing normal parameters.

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}
console.log('Named parameter example : ' + divide({ dividend: 10, divisor: 2 }))

// Rest Paramters : Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are alwasy arrays.
{
    function add(a: number, b: number, ...rest: number[]) {
        return a + b + rest.reduce((p, c) => p + c, 0);
    }
    console.log('Rest parameter example with no extra arguments : '+add(1, 2));
    console.log('Rest parameter example with one extra argument : '+add(1, 2, 3));
    console.log('Rest parameter example with multiple extra arguments : '+add(1, 2, 3, 4, 5));

    // the line rest.reduce((p, c) => p + c, 0) is used to calculate the sum of the elements in the rest parameter's array, which becomes the return value of the function. So, when you call the function with any number of arguments, it adds all those numbers together and returns the result.
}