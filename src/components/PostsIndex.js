import _ from 'underscore';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.pairs(this.props.posts).map(([id,post]) => {
            return  (
                <Link to={`/posts/${id}`}>
                    <li key={id} className="list-group-item">
                        {post.title}
                    </li>
                </Link>
            )
        })
    }

    render() {
        return (
            <div className="col-md-12">
                 <Link className="btn btn-primary pull-right" to="/posts/new">Add a post</Link>
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