import {Tarjeta} from "../Componentes/Tarjeta";
import '../CSS/Tarjetas.css'

function Contenedor() {
    return(
        <div>
            <Tarjeta
                lugar='Zocalo'
                imagen='zocalo'
                href={"/form"}/>
            <Tarjeta
                lugar='Bellas Artes'
                imagen='bellas_artes'
                href={"/bellasartes"}/>
            <Tarjeta
                lugar='Torre Latinoamericana'
                imagen='torre'
                href={""}/>
            <Tarjeta
                lugar='Xochimilco'
                imagen='xochimilco'
                href={""}/>
            <Tarjeta
                lugar='Reforma'
                imagen='reforma'
                href={""}/>
            <Tarjeta
                lugar='Polanco'
                imagen='polanco'
                href={""}/>
            <Tarjeta
                lugar='Basilica'
                imagen='basilica'
                href={""}/>
            <Tarjeta
                lugar='Chapultepec'
                imagen='chapultepec'
                href={""}/>
        </div>
    )
}

export default Contenedor
