// Javascipt types : number, string, boolean, null, undefined and objects
// Typescript types : any, unknown, never, enum and tuple

let sales = 123456789;      //number type
let course = "TypeScript";  //string type
let is_published = true;    //boolean type

// even if we not use " :'type' , typescript will automatically detect the type based on value.

//'any' - 'any' represents any type of value
// if we declare a variable and don't initialize it, the typescript compiler assumes this variable is of type "any"
let level;

level = 1;
level = 'a';
// later we can store any type of value in it.
// but this is against the whole idea of using typescript because, we use typescript for type safety.
// As a best practise we should avoid using the any type as much as possible.