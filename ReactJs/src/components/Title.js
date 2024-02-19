import React from 'react'

//code optimization tips
// 1. Props - Object

function Title({name, Role, ID, Company}) {
  return  (
    <div>
        <h1>{name}</h1>
        <h1>{Role}</h1>
        <h1>{ID}</h1>
        <h1>{Company}</h1>
    </div>
  ); 
  
  //Whenever we get a name from the screen, we can pass it into the component over here!
}

export default Title
