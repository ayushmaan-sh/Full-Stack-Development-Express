import React from "react";
import Title from "../components/Title";
import UL_list from "../components/UL_list";

function About(){
return (
    <div>
        <Title name="Ayushmaan Shukla" 
        Role={"Software Engineer"}
        ID={"EMP/EP/002"}
        Company={"EPAM Systems"}/>
        <UL_list />
        {/* <Title name="Title name 2"/> */}
    </div>
) 
}

export default About