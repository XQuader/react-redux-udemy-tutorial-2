import _ from 'underscore';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const ROUTES = {
    auth: {
        feature: {
            label: 'Feature',
            auth: true
        },
        logout: {
            label: 'Logout',
            auth: true
        }
    },
    unauth: {
        signin: {
            label: 'Sign In',
            auth: false
        },
        signup: {
            label: 'Sign Up',
            auth: false
        }
    }
};

class Header extends Component {
    renderLinks(){
        const {auth} = this.props;
        const visibleRoutes = auth.authenticated ? ROUTES.auth : ROUTES.unauth;

        return _.map(visibleRoutes, (route, path) => <li key={path} className="nav-item"><Link to={path} className="nav-link">{route.label}</Link></li>)
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Home</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);