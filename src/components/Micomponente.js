//Se debe importar React para poder crear componentes
import React from 'react';
import Imagen from './imagenes'

/**
 * Se genera un componente que extiende del objeto genérico de React
 * El componente debe implementar la función render para poder renderizar el contenido
 * La función render retora un objeto JSX que es el contenido que se renderizará al ser invocado
 * Los componentes solo pueden devolver una sola etiqueta
 * Para devolver más de una etiqueta se puede usar React.Fragment que no crea ningún nodo HTML
 * También se puede optar por la opción lógica de regresar un div que represente al componente
 */
class MiComponente extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hola, soy un copmonente exportado desde la carpeta ./Components/</h1>
                <h3>Estamos probando el React Fragment</h3>
                <Imagen title="Androssi Zahard Besto Waifu" url="https://i.pinimg.com/originals/05/ef/fd/05effd057bde7d5fc86e04614baeb379.jpg"></Imagen>
                <Imagen title="Aquí podemos seguir apreciando su enorme belleza" url="https://i.imgur.com/NvevCBn.jpg"></Imagen>
                <Imagen title="Hornet también está chida" url="https://lh3.googleusercontent.com/proxy/YzOC8YYd06sIjmF5jY4H9yNPxNrH2wMVrcrxjS9pNMXHzKTe8FqLhnncjbyeoxcVYa38kuOSGP331hcqxHE0-v2tMF_43gs_Go6T51NIjKbZqZhTvirVs_HhGRHMN10-u72g_54mtZajcF5ulzo"></Imagen>
                <hr />
            </React.Fragment>
        )
    }
}

export var MesajeEstatico = () => {
    return (
        <React.Fragment>
            <hr></hr>
            <h1>ESto es un mensaje estático</h1>
        </React.Fragment>
    )
}

export class Receta extends React.Component {
    render() {
        let receta = {
            nombre: "Tacos",
            calorias: 670,
            ingredientes: ['tortilla', "Carne", "Salsa", "Limones"]
        }
        return (
            <div className="Recipe">
                <h2> Ahora veamos una pequeña receta</h2>
                <h3> Vamos a comer {receta.nombre}</h3>
                <h3> Que contiene {receta.calorias} calorias</h3>
                <h4>¿Qué ingredientes lleva?</h4>
                <ul>
                    {receta.ingredientes.map((ingrediente, i) => {
                        return (
                            <li key={i}>
                                {ingrediente}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}


/**
 * Exporta el componente que regresa un mensaje simple
 */
export default MiComponente;

