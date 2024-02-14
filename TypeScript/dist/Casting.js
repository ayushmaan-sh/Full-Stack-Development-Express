"use strict";
let x = 12948;
console.log(x);
console.log(x.length);
let y = 'Hello TypeScript';
console.log(y.length);
{
    let x = 'Hello TypeScript';
    console.log('Example of force casting : ' + x.length);
}
class Animal {
    constructor(name) {
        this.name = name;
    }
}
let obj = new Animal("Dog");
let dog = obj;
console.log(dog.name);
