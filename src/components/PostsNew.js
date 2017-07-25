import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'underscore';
import {addPost} from '../actions';

class PostsNew extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

    }

    render() {
        return (
            <div className="col-md-12">
                <form onSubmit={this.handleSubmit}>
                    <h3>Posts</h3>
                    <ul className="list-group">
                    </ul>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {addPost})(PostsNew);