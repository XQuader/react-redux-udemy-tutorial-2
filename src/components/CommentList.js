import React, {Component} from 'react';
import {connect} from 'react-redux';

const CommentList = function(props) {
    return (
        <ul className="comment-list">
            {props.comments.map(comment => <li key={comment}>{comment}</li>)}
        </ul>
    )
};

function mapStateToProps({comments}) {
    return {comments};
}

export default connect(mapStateToProps)(CommentList);