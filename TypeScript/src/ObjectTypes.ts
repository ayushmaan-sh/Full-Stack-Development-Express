// TypeScript has a specific syntax for typing objects.

{
    const car: { name: string, model: string, year: number } = {
        name: 'Tesla',
        model: 'X',
        year: 2017
    }
    console.log(car)
}

// Type inference is also in Object types

{
    const car = {
        type: "Toyota",
    };
    car.type = "Ford";
}

// Optional properties
// Optional properties are properties that don't have to be defined in the object definition.
// In an ordinary objext type, it is cumpulsory to define every type which is required, but through optional property,  we can define an temporary type in the object

{
    const car: { name: string, type?: string, year: number } = {
        name: "Tesla",
        year: 2005,
        type: "Electric"  //optional type
    }
    console.log(car)
}

{
    const nameAgeMap: {[index:string]: number} = {}
    nameAgeMap.ayush = 20;
    nameAgeMap.raj =20;

    console.log(nameAgeMap)
}