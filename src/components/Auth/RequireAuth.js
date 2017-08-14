import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export default function (WrappedComponent) {
    class RequireAuth extends Component {
        componentDidMount() {
            if (!this.props.authenticated){
                this.timer = setTimeout(() => this.props.history.push('/'), 2000);
            }
        }

        render() {
            if (!this.props.authenticated){
                return <h1>Not authenticated</h1>;
            }

            return (
                <WrappedComponent {...this.props}/>
            )
        }

        componentWillUnmount() {
            if (!this.props.authenticated){
                clearTimeout(this.timer);
            }
        }
    }

    function mapStateToProps({auth:{authenticated}}) {
        return {authenticated};
    }

    return connect(mapStateToProps)(withRouter(RequireAuth));
}