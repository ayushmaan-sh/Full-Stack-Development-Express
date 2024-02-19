import React from "react";

function Projects (props: any) {
    return (
        <h1>{props.name}</h1>
    )
}

export function Form (prjName:any){

    function handleRegister(event:any){
        event.preventDefault()  //do not reload the screen
        console.log("Submited successfully")
    }

    return (
        <form>
            <input type="email" placeholder="Enter email" />
            <button onClick={handleRegister}>Submit</button>
        </form>
    )
}

export default Projects