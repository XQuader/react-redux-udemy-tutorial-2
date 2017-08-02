import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {authenticate} from "../actions/index";
import {connect} from 'react-redux';

class Header extends Component {
    handleClick = () => {
        this.props.authenticate(!this.props.authenticated);
    };

    authButton() {
        return <button className="btn navbar-btn" onClick={this.handleClick}>{this.props.authenticated ? 'Sign Out' : 'Sign In'}</button>
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        {this.authButton()}
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps({authenticated}) {
    return {authenticated};
}

export default connect(mapStateToProps, {authenticate})(Header);