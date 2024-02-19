import React from "react";

function ConditionalRendering(){

    function handleRegister(event:any){
        event.preventDefault()
    }

    let email:string = "ayushmaanshukla274@gmail.com"
    let amount:number = 700
    return (
        <form>
           {email == "ayushmaanshukla274@gmail.com" && amount > 500 ? (
            <div>
                <input type="email" placeholder="Enter email" />
                <button onClick={handleRegister}>Submit</button>
            </div>
           ):(
            <h1>No services for donations below 500</h1>
           )}
        </form>
    )
}

export default ConditionalRendering