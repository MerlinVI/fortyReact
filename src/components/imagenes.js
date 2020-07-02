import React, { Component } from 'react'

class Imagen extends Component {
    state = {
        anime_name: "Torre de Dios"
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.anime_name} </h1>
                <h3>{this.props.title}</h3>
                <img src={this.props.url}></img>
            </React.Fragment>
        );
    }
}

export default Imagen;