import React from "react";
const Email = (props) => {
    return(
        <input type={"email"} maxLength={"50"} minLength={"8"} required placeholder={props.placeholder} className={"inputs"} id={"email"}/>
    );

}

export default Email