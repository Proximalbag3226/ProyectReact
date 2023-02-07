const Contra = (props) => {
    return(
        <input type="password" maxLength={"20"} minLength={"8"} required placeholder={props.placeholder} className={"inputs"} id={"conraseña"}/>
    );
}

export default Contra