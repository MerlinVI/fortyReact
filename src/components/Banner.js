import React, { Component } from 'react'

class Banner extends Component {
    render() {
        return (
            <section id="banner" className="major">
                <div className="inner">
                    <header className="major">
                        <h1>Hola, mi nombre es {this.props.name}</h1>
                    </header>
                    <div className="content">
                        <p>La plantilla de un sitio responsivo diseñada por HTML5 UP<br />
                    y distribuida bajo la Licencia Creative Commons.
                    </p>
                        <ul className="actions">
                            <li>
                                <a href="#one" className="button next scrolly">Get Started</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;