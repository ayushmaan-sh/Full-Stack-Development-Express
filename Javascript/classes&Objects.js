// Creating object
const employee = {
    Name : "Ayushmaan Shukla",
    Id : 24,
    Team : "Web Application Development",
    Role : "Full Stack Developer",
}
console.log(employee);

const compamy = {
    Company_Name : "Accenture",
    Type : "IT Services"
}

//Prototype
employee.Prototype = compamy

class Gradution{
    constructor(name){
        this.name = name
    }
    college(){
       console.log("IIT Kanpur")
    }
    course(crsName){
        console.log("B.tech")
    }
    branch(brhName){
        console.log("Computer Science")
    }
}

//Inheritance using extends keyword
class Post_Graduation extends Gradution{}

let grad = new Gradution("Ayushmaan Shukla")
console.log(grad)
let pg = new Post_Graduation("M.tech")
console.log(pg)