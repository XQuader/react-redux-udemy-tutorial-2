import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMessage} from '../actions'

class Feature extends Component {
    componentWillMount() {
        this.props.fetchMessage();
    }

    render() {
        return (
            <div>
                <h3>This is a feature</h3>
                <div>{this.props.message}</div>
            </div>
        );
    }
}

function mapStateToProps({message}) {
    return {message}
}

export default connect(mapStateToProps, {fetchMessage})(Feature);