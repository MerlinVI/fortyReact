import React, { Component } from 'react'
import Article from './Article'

class Main extends Component {
    

    render() {
        return (
            <div id="main">
                <section id="one" className="tiles">
                    <Article src_image="images/pic01.jpg" link_name="Chamy" text="Ipsum dolor sit amet"></Article>
                    <Article src_image="images/pic02.jpg" link_name="Salem" text="feugiat amet tempus"></Article>
                    <Article src_image="images/pic03.jpg" link_name="Hatake" text="Lorem etiam nullam"></Article>
                    <Article src_image="images/pic04.jpg" link_name="Shiro Sally" text="Nisl sed aliquam"></Article>
                    <Article src_image="images/pic05.jpg" link_name="Consequat" text="Ipsum dolor sit amet"></Article>
                    <Article src_image="images/pic06.jpg" link_name="Etiam" text="Feugiat amet tempus"></Article>
                </section>
                <section id="two" >
                    <section className="inner">
                        <header className="major">
                            <h2>Massa libero</h2>
                        </header>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque
                        lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                        <ul class="actions">
                            <li><a href="landing.html" class="button next">Get Started</a></li>
                        </ul>
                    </section>
                </section>
            </div>
        );
    }
}

export default Main;