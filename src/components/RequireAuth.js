import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

export default function(ComposedComponent) {
    class Authentication extends Component{
        static contextTypes = {
            router: PropTypes.object
        };

        componentWillMount() {
            if (!this.props.authenticated) {
               this.context.router.history.push('/');
            }
        }

        render() {
            if (!this.props.authenticated) {
                return <h3>Not Authenticated!</h3>
            }

            return <ComposedComponent {...this.props} />
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.history.push('/');
            }
        }
    }

    function mapStateToProps({authenticated}) {
        return {authenticated};
    }

    return connect(mapStateToProps)(Authentication);
}

