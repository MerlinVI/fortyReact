//Se debe importar React para poder crear componentes
import React from 'react';

const MesajeEstatico = () => {
    return (
        <React.Fragment>
            <hr></hr>
            <h1>ESto es un mensaje estático</h1>
        </React.Fragment>
    )
}

/**
 * Exporta el componente que regresa un mensaje simple
 */
export default MesajeEstatico;

