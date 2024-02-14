//TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
// Utility types are predefined generic types in TypeScript that help handle common use cases. These types assist the developer in writing and maintaining code, making it readable, maintainable, and bug-free.

// Here are some commonly used utility types ->

// Partial<T>: Defines a subset of an object where all properties are optional.

interface Axis{
    x: number
    y: number
}

let Points: Partial<Axis> = {} // `Partial` allows x and y to be optional

Points.x = 10
Points.y = 20
console.log(Points)