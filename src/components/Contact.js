import React, { Component } from 'react'

class Contact extends Component {
    submit = (e) => {
        e.preventDefault();
        console.log("Click en el botón");
    }

    render() {
        return (
            <section id="contact">
                <div className="inner">
                    <section>
                        <form method="post" action="#" onSubmit={this.submit}>
                            <div className="fields">
                                <div className="field half">
                                    <label for="name">Nombre</label>
                                    <input type="text" name="name" id="name" placeholder="Nombre"></input>
                                </div>
                                <div className="field half">
                                    <label for="email">Email</label>
                                    <input type="text" name="email" id="email" placeholder="example@domain.com"></input>
                                </div>
                                <div className="field">
                                    <label for="message">Mensaje</label>
                                    <textarea name="message" id="message" rows="6" placeholder="Escribe aquí tu mensaje"></textarea>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section class="split">
                        <section>
                            <div class="contact-method">
                                <span className="icon solid alt fa-envelope"></span>
                                <h3>Email</h3>
                                <a href="#">alexis@gmail.com</a>
                            </div>
                        </section>
                        <section>
                            <div className="contact-method">
                                <span className="icon solid alt fa-phone"></span>
                                <h3>Teléfono</h3>
                                <span>(000) 000-0000 x1234567</span>
                            </div>
                        </section>
                        <section>
                            <div className="contact-method">
                                <span className="icon solid alt fa-home"></span>
                                <h3>Dirección</h3>
                                <span>1234 Somewhere Road #5432<br />
										Nashville, TN 00000<br />
										United States of America</span>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        );
    }
}

export default Contact;