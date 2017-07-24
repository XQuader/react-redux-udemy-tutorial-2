import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'underscore';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.pairs(this.props.posts).map(([id,post]) => {
            return  (
                <li key={id} className="list-group-item">
                    {post.title}
                </li>
            )
        })
    }

    render() {
        console.log(this.props.posts);
        return (
            <div className="col-md-12">
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);