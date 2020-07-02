import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="#" className="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="#" className="icon brands alt fa-github"><span class="label">Github</span></a></li>
                        <li><a href="#" className="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy;Untitled</li>
                        <li>Design:<a href="https://html5up.net"> HTML5 UP</a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;