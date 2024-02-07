//Syntax for making an array
{
const names: string[] = [];
names.push("Ayushmaan","Raj","Mayank");
console.log(names);
}

//the 'readonly' keyword can prevent arrays from being changed.
{
    const names: readonly string[] = ['Ayushmaan','Raj','Mayank']
    // names.push('aman')
}

//Type inference - TypeScript can infer the type of an array if it has values.

//When you tell it about an array with some stuff in it, TypeScript can figure out what type of stuff it is. It's like guessing based on what's already there. So, if you have numbers in your array, TypeScript will know it's an array of numbers without you having to say it explicitly
{
    const names = ['Ayush','Raj','Mayank']
    names.push('aman')
    // names.push(2) -> ERROR
}