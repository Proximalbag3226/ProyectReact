import React from "react";

const Inputs = (props) => {
    return(
        <input type="text" maxLength={"15"} minLength={"3"} required placeholder={props.placeholder} className={"inputs"} id={props.idt}/>
    );
}

export default Inputs