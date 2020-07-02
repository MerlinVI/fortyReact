import React, {Component} from 'react'

class Menu extends Component{
    render(){
        return(
            <nav id="menu">
                <ul className="links">
                    <li><a>Home</a></li>
                    <li><a>Landing</a></li>
                    <li><a>generic</a></li>
                    <li><a>Elements</a></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;