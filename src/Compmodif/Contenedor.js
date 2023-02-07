import {Tarjeta} from "../Componentes/Tarjeta";
import '../CSS/Tarjetas.css'

function Contenedor() {
    return(
        <div>
            <Tarjeta
                lugar='Zocalo'
                imagen='zocalo'/>
            <Tarjeta
                lugar='Bellas Artes'
                imagen='bellas_artes'/>
            <Tarjeta
                lugar='Torre Latinoamericana'
                imagen='torre'/>
            <Tarjeta
                lugar='Xochimilco'
                imagen='xochimilco'/>
            <Tarjeta
                lugar='Reforma'
                imagen='reforma'/>
            <Tarjeta
                lugar='Polanco'
                imagen='polanco'/>
            <Tarjeta
                lugar='Basilica'
                imagen='basilica'/>
            <Tarjeta
                lugar='Chapultepec'
                imagen='chapultepec'/>
        </div>
    )
}

export default Contenedor
