// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:

{
    let outTuple: [string, number, boolean];
    outTuple = ['Ayushmaan', 20, true]
    outTuple.push(23)
}

// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.

// Readonly Tuple
// A good practice is to make your tuple readonly. 

{
    let outTuple: readonly [string, number, boolean];
    outTuple = ['Ayushmaan', 20, true]
    // outTuple.push(23) -> ERROR
}

// Named Tuples
// Named tuples allow us to provide context for our values at each index.
// Named tuples provide more context for what our index values represent.

{
    const graph: [x: number, y: number] = [55.2, 34.4]
    console.log(graph)
}

// Destructuring Tuples
// Think of tuples as special types of arrays with a fixed number of elements, where each element can have its own type. When we say we can "destructure" them, it means we can break them apart easily. Just like unwrapping a gift, we can take out each piece of the tuple and use them separately. So, if you have a tuple with, say, two elements—a name and an age—you can easily grab each part and use them individually.

{
    const graph: [number, string] = [55.2, "41.3"];
    const [x, y] = graph;
    console.log(x,y)
}