import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LikesAndComments from './likes_and_comments';

class CommentsItem extends React.Component {
  constructor(props){
    super(props);
  this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment(e){
    const { comment } = this.props;
    e.preventDefault();
    this.props.deleteComment(comment.id);
  }

  deleteCommentButton(){
    const { currentUser, comment, postOwner } = this.props;
    const deleteButton = <button className="delete-comment"><i className="fa fa-times" onClick={this.deleteComment} aria-hidden="true"></i></button>
    if (currentUser.id === comment.author_id || currentUser.id === postOwner){
      return deleteButton;
    // } else if (currentUser.id === postOwner){
    //   return deleteButton;
    }
  }

  render() {
    const { comment } = this.props;
    return (
      <li>
        <div className="comment-snippet">
          <Link to={`/users/${comment.author_id}`}><span className="comment-author">{this.props.comment.username}</span></Link>
          <span className="comment-body">{comment.body}</span>
          <span className="">{this.deleteCommentButton()}</span>
        </div>
      </li>
    );
  }
}

export default CommentsItem;
