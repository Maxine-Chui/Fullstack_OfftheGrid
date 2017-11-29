import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LikesAndComments from './likes_and_comments';

class CommentsItem extends React.Component {

  render() {
    return (
      <li>
        <div className="comment-snippet">
          <span className="comment-author">{this.props.comment.commenter_name}</span>
          <span className="comment-body">{this.props.comment.body}</span>
        </div>
      </li>
    );
  }
}

export default CommentsItem;
