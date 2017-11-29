import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LikesAndComments from './likes_and_comments';

class CommentsItem extends React.Component {

  render() {
    return (
      <li>
        <div className="commenter-username">this.props.comment.username</div>
        <div>herrooooo</div>
      </li>
    );
  }
}

export default CommentsItem;
