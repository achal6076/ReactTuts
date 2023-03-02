import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();
const nName = createContext();
const App = () =>{
  return (
    <>
    <FirstName.Provider value ={"Achal "}>
      <LastName.Provider value = {"Sharma"}>
        <nName.Provider value={"test"}>


      <CompA/>
        </nName.Provider>
      </LastName.Provider>
    </FirstName.Provider>
    {/* <CompA/> */}
    </>
  )
};

export default App;

export {FirstName, LastName, nName};
