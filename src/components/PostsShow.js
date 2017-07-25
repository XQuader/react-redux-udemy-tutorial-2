import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deletePost, fetchPost} from "../actions/index";

class PostsShow extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    handleDelete() {
        this.props.deletePost(this.props.post.id, () => this.props.history.push('/'));
    }

    render() {
        const {post} = this.props;

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div className="col-md-12">
                <Link to="/">Back to index</Link>
                <button className="btn btn-primary pull-right" onClick={this.handleDelete}>Delete</button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )

    }
}

function mapStateToProps({posts}, ownProps) {
    return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);