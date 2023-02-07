import React from "react";
const Numero = (props) => {
    return(
        <input type={"tel"} maxLength={"10"} minLength={"8"} required placeholder={props.placeholder} className={"inputs"} id={"telefono"}/>
    );
}

export default Numero