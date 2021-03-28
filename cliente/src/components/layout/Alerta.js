import React from 'react';

const Alerta = ({alerta}) => {
    
    return alerta ? ( <div data-cy="alerta" className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> )  : null;
}
 
export default Alerta;