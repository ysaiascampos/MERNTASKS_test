import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';
import { TransitionGroup, CSSTransitionĀ } from 'react-transition-group';
import Alerta from '../layout/Alerta'

const ListadoProyectos = () => {

    // Extrar proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { msg, proyectos, obtenerProyectos } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        // si hay un error
        if(msg) {
            mostrarAlerta(msg.msg, msg.categoria);
        }

        obtenerProyectos();
        // eslint-disable-next-line
    }, [msg]);

    // revisar si proyectos tiene contenido
    if(proyectos.length === 0 ) return <p>No hay proyectos, comienza creando uno</p>;

    return ( 

        <ul data-cy="listado-proyectos" className="listado-proyectos">
            <Alerta alerta={alerta} />

            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto 
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;