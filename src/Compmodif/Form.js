import React from "react";
import Inputs from "../Componentes/Campos";
import Contra from "../Componentes/contra";
import Email from "../Componentes/email.js";
import Numero from "../Componentes/numero.js";
import Boton from "../Componentes/botonr.js";
import Alertas from "../Componentes/alertas.js";

function Formulario(props){
    return(
        <div>
        <h1 className={"titulo"}>Complete los campos</h1>
            <div className={"inputss"} id={"inputss"}>
                <br/><br/><br/>
                <Inputs
                placeholder={"Nombre"}
                idt={"nombre"}/><br/><br/>
                <Inputs
                placeholder={"Apellido Paterno"}
                idt={"apellido_paterno"}/><br/><br/>
                <Inputs
                placeholder={"Apellido Materno"}
                idt={"apellido_materno"}/><br/><br/>
                <Numero
                placeholder={"Celular"}/><br/><br/>
                <Email
                placeholder={"Email"}/><br/><br/>
                <Contra
                placeholder={"Contraseña"}/><br/><br/><br/>
                <Boton/>
                <Alertas/>
            </div>
        </div>
    );
}




export default Formulario