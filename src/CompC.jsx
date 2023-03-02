import React, { useContext } from "react";
import CompD from "./CompD";
import { FirstName,LastName } from "./App";

const CompC =()=>{
    const firstname = useContext(FirstName);
    const lasttname = useContext(LastName);
    
    return <h1>my name is {lasttname} {firstname}</h1>

    // return <CompD/>
}

export default CompC;