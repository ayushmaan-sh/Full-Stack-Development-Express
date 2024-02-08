// Imagine you have a bunch of categories for your blog posts: "Tech", "Travel", "Food", and "Fashion". Now, instead of writing these categories every time you need them, you can use an enum.

// In TypeScript, an enum is like a list of predefined options. You give each option a name and a value. So, for our blog post categories, we can create an enum like this :
enum CardinalDirections {
    North,
    East,
    South,
    West
}
//Now, whenever you need to use a category in your code, you can simply refer to it by its name from the enum:
let myDirection: CardinalDirections = CardinalDirections.North

//   console.log(myDirection)
{
    enum catagories {
        Tech = 'This is a tech blog',
        NonTech = 'This is a non tech blog'
    }
    console.log(catagories.Tech)
}

// Technically, you can mix and match string and numeric enum values, but it is recommended not to do so