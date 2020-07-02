import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/main.css'
import './assets/css/noscript.css'
import './assets/css/fontawesome-all.min.css'


//Import custum componetes
import MiComponente, { Receta } from './components/Micomponente';
import MesajeEstatico from './components/MensajeEstatico'

import Header from './components/Header'
import Menu from './components/Menu'
import Banner from './components/Banner'
import Main from './components/Main'
import Contact from './components/Contact'
import Footer from './components/Footer'

var saludate = nombre => {
    return <p>Mi nombre es {nombre}</p>
}

//Los componentes que se invocan se llaman de la misma forma que una etiqueta en JSX
function App() {
    return (
        <div className="is-preload">
            <div className="wrapper">
                <Header></Header>
                <Menu></Menu>
                <Banner name="Alexis Merlin"></Banner>
                <Main></Main>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
