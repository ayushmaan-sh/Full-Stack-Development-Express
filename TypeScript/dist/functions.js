"use strict";
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log('Hello TypeScript');
}
function multiply(a, b) {
    return a * b;
}
console.log('Parameters example : ' + multiply(5, 2));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log('Optional Parameters example without c : ' + add(2, 2));
console.log('Optional Parameters example with c : ' + add(2, 2, 4));
{
    function add(value1, value2 = 10) {
        return value1 + value2;
    }
    console.log('Default parameter example : ' + add(2 + 2));
}
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log('Named parameter example : ' + divide({ dividend: 10, divisor: 2 }));
{
    function add(a, b, ...rest) {
        return a + b + rest.reduce((p, c) => p + c, 0);
    }
    console.log('Rest parameter example with no extra arguments : ' + add(1, 2));
    console.log('Rest parameter example with one extra argument : ' + add(1, 2, 3));
    console.log('Rest parameter example with multiple extra arguments : ' + add(1, 2, 3, 4, 5));
}
