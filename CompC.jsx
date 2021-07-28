import React from "react";
import { FirstName, LastName} from "./App";

const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {
                    (fname) => {
                        return (
                            <LastName.Consumer>
                                {
                                    (lname) => {
                                        return (
                                            <h1>
                                                hello {fname} {lname} how are you this is component c
                                            </h1>
                                        );
                                    }
                                }


                            </LastName.Consumer>
                        )
                    }
                }
            </FirstName.Consumer>

        </>
    );
};
export default CompC;