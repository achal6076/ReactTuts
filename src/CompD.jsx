import React from "react";
import { FirstName, LastName, nName } from "./App";

const CompD = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <nName.Consumer>
                    {(nname) => {
                      return (
                        <h1>
                          my name is {fname}
                          {lname} {nname}
                        </h1>
                      );
                    }}
                  </nName.Consumer>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default CompD;
