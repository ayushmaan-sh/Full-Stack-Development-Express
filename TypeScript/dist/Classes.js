"use strict";
class Person {
    constructor() {
        this.name = 'Ayushmaan';
    }
}
const person = new Person();
console.log(person.name);
{
    class Person {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }
    const person = new Person('Ayushmaan');
}
