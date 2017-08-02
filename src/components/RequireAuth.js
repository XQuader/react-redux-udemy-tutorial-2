import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

export default function(ComposedComponent) {
    class Authentication extends Component{
        static contextTypes = {
            router: PropTypes.object
        };

        componentDidMount() {
            if (!this.props.authenticated) {
                this.timer = setTimeout(() => {
                    this.context.router.history.push('/');
                }, 1000);
            }
        }

        render() {
            if (!this.props.authenticated) {
                return <h3>Not Authenticated!</h3>
            }

            return <ComposedComponent {...this.props} />
        }

        componentWillUnmount() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        }
    }

    function mapStateToProps({authenticated}) {
        return {authenticated};
    }

    return connect(mapStateToProps)(Authentication);
}

