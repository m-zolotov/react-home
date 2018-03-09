import React from 'react';

function Comment({comment}) {
    return (
        <p>
            <small className="comment-text">{comment.text}</small>
            <em className="comment-autor">{comment.user}</em>
        </p>
    );
}

export default Comment