import React, {Component} from 'react'

class Header extends Component{
    render() {
        return(
            <header className="alt" id="header">
                <a className="logo"> <strong> Forty </strong> <span>by HTML5 up</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
        );
    }
}

export default Header;