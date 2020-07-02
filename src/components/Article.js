import React, { Component } from 'react'

class Article extends Component {
    render() {
        return (
            <article>
                <span className="image">
                    <img src={this.props.src_image}></img>
                </span>
                <header className="major">
                    <h3><a href="#lading" className="link">{this.props.link_name}</a></h3>
                    <p>{this.props.text}</p>
                </header>
            </article>
        );
    }
}


export default Article;