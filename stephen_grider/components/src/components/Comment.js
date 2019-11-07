import React from 'react';

const Comment = (props) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={props.avatar} />
    </a>
    <div className="content">
      <a href="/" className="author">{props.author}</a>
      <div className="metadata">
        <span className="date">{props.date}</span>
      </div>
      <div className="text">Nice blog post!</div>
    </div>
  </div>
)

export default Comment