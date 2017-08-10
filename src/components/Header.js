import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const ROUTES = {
    '/': {
        label: 'Home'
    },
    signin: {
        label: 'Sign In',
        auth: false
    },
    signup: {
        label: 'Sign Up',
        auth: false
    },
    feature: {
        label: 'Feature',
        auth: true
    }
};

class Header extends Component {
    render() {
        const {auth} = this.props;

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

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);