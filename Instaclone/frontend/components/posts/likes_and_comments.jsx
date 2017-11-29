import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentsItem from './comments_item';

class LikesAndComments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      author: this.props.currentUser.username,
      body: ''
    };
  this.toggleLike = this.toggleLike.bind(this);
  this.addComment = this.addComment.bind(this);
  }

  // componentWillMount(){
  //
  // }

  // componentDidMount(){
  //   this.props.fetchPostComments();
  // }

  //

  authorCaption(){
    if (this.props.post.caption !== null) {
      return `${this.props.post.username}`;
    }
  }

  caption(){
    if (this.props.post.caption !== null) {
      return `${this.props.post.caption}`;
    }
  }

  toggleLike(e) {
    e.preventDefault();
    const like = this.props.liked;
    if (like) {
      return this.props.deleteLike(this.props.postId);
    } else {
      return this.props.createLike(this.props.postId);
    }
  }

  toggleLikeButton(){
    const likedButton = <button className="liked"><i className="fa fa-heart" onClick={this.toggleLike} aria-hidden="true"></i></button>;
    const unlikedButton = <button className="unliked"><i className="fa fa-heart-o" onClick={this.toggleLike} aria-hidden="true"></i></button>;
    return (this.props.liked) ? likedButton : unlikedButton;
  }

  likes(){
    if (this.props.numLikes > 1) {
      return `${this.props.numLikes} likes`;
    } else if (this.props.numLikes === 0) {
      return '';
    } else {
      return `${this.props.numLikes} like`;
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  addComment(e) {
    e.preventDefault();
    const comment = {
      author: this.props.currentUser.username,
      body: this.state.body
    };
    return this.props.createComment(this.props.postId, comment).then(() => {
    this.setState({body:''});   
    });
  }

  render(){
    return (
      <div>
        <div className="post-action-icons">
          <div className="like-icon">{this.toggleLikeButton()}</div>
          <div className="comment-icon"><i className="fa fa-comment-o" aria-hidden="true"></i></div>
          <div className="bookmark-icon"><i className="fa fa-bookmark-o" aria-hidden="true"></i></div>
        </div>
        <div className="num-likes">{this.likes()}</div>

        <div className="comment-snippet">
          <span className="comment-author">{this.authorCaption()}</span>
          <span className="comment-body">{this.caption()}</span>
        </div>

        <div className="comments-section">
          <ul className="comments-items">
            {
              this.props.allComments.map(comment => (
                <CommentsItem
                  key={comment.id}
                  comment={ comment }/>
              ))
            }
          </ul>
          <div className="add-comment">
            <label>
              <input type="text"
                placeholder="Add a comment..."
                value={this.state.body}
                onChange={this.update('body')}
                className="add-comment-input"
                />
            </label>
            <button className="comment-button" onClick={this.addComment}>Add Comment</button>
          </div>
        </div>

      </div>
    );
  }
}

export default LikesAndComments;
