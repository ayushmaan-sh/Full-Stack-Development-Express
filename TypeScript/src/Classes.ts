// TypeScript Classes : TypeScript adds types and visibility modifiers to JavaScript classes.

// Classes in TypeScript provide a way to define blueprints for creating objects with similar properties and methods. They allow you to encapsulate data and behavior into a single unit, making it easier to manage and reuse code

class Person {
    name: string = 'Ayushmaan';
  }
  
  const person = new Person();
 console.log(person.name)

 //n TypeScript, when you define a class with properties but without an explicit constructor, TypeScript compiler automatically generates a constructor for you. This automatically generated constructor initializes the properties of the class.


 // Class members also be given special modifiers which affect visibility. There are three main visibility modifiers in TypeScript :

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

{
    class Person {
        private name:string

        public constructor(name:string){
            this.name = name
        }

        public getName(): string{
            return this.name;
        }
    }
    const person = new Person('Ayushmaan')
    // console.log(Person.getName())
    //  person.name isn't accessible from outside the class since it's private
}