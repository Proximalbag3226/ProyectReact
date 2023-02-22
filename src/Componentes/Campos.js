import React from "react";

const Inputs = (props) => {
    return(
        <input type="text" maxLength={"15"} minLength={"3"} required placeholder={props.placeholder} className={"inputs"} name={props.name} id={props.idt} value={props.value}/>
    );
}

export default Inputs