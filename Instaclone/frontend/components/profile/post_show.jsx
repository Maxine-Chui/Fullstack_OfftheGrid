import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostCommentsItem from './post_comments_item';

class PostShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      author: this.props.currentUser.username,
      body: ''
    };
  this.toggleLike = this.toggleLike.bind(this);
  this.addComment = this.addComment.bind(this);
  }

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
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  addComment(e) {
    if (e.keyCode === 13) {
    e.preventDefault();
    const comment = {
      author: this.props.currentUser.username,
      body: this.state.body
    };
    return this.props.createComment(this.props.postId, comment).then(() => {
    this.setState({body:''});
    });
  }
  }

  render(){
    const { post, currentUser, deleteComment } = this.props;

    return (
      <div className="post-show-container">
        <div className="post-show-photo"><img src={post.img_url}/></div>
        <div className="post-show-comment-section">
          <div className="comment-top">
              <div className="comment-snippet">
                <div className="author-snippet">
                  <img className="comment-author-photo" src={post.author_photo}/>
                  <div className="comment-author">{post.username}</div>
                </div>
                <div>
                  <Link to={`/users/${post.author_id}`}><span className="comment-author">{this.authorCaption()}</span></Link>
                  <span className="comment-body">{this.caption()}</span>
                </div>
              </div>

              <div>
                <ul className="comments-items">
                  {
                    this.props.postComments.map(comment => (
                      <PostCommentsItem
                        key={comment.id}
                        comment={ comment }
                        currentUser={ currentUser }
                        deleteComment={ deleteComment }/>
                    ))
                  }
                </ul>
              </div>
            </div>
          <div className="post-likes-and-comments">
            <div className="post-show-action-icons">
              <div className="post-like-icon">{this.toggleLikeButton()}</div>
              <label htmlFor="add-comment-enter" className="post-comment-icon"><i  className="fa fa-comment-o" aria-hidden="true"></i></label>
              <div className="post-bookmark-icon"><i className="fa fa-bookmark-o" aria-hidden="true"></i></div>
            </div>
            <div className="post-num-likes">{this.likes()}</div>
            <div className="post-age">{this.props.age}&nbsp;ago</div>
            <div className="post-add-comment">

              <label>
                <input id="add-comment-enter"
                  type="text"
                  placeholder="Add a comment..."
                  value={this.state.body}
                  onChange={this.update('body')}
                  onKeyUp={this.addComment}
                  className="add-comment-input"
                  />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostShow;
