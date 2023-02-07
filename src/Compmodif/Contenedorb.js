import {Tarjeta} from "../Componentes/Tarjeta";
import '../CSS/Tarjetas.css'

function Contenedorb() {
    return(
        <div>
            <Tarjeta
                lugar='¿Tu cuadro de bici es original?'
                imagen='casco'/>
            <Tarjeta
                lugar='Baterias Phylion'
                imagen='bici'/>
            <Tarjeta
                lugar='Equipamiento obligatorio'
                imagen='equipo'/>
            <Tarjeta
                lugar='Viabilidad de los sistemas de bicicletas'
                imagen='rojo'/>
        </div>
    )
}

export default Contenedorb
