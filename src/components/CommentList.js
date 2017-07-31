import React, {Component} from 'react';

const CommentList = function(props) {
    return (
        <ul className="comment-list">
            {props.comments && props.comments.map(comment => <li>{comment}</li>)}
        </ul>
    )
};

export default CommentList;