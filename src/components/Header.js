import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/signin">SignIn</Link></li>
                    <li className="nav-item"><Link to="/signup">SignUp</Link></li>
                </ul>
            </nav>
        )
    }
}