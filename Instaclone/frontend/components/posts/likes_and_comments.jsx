import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LikesAndComments extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   liked: this.props.liked
    // };
  this.toggleLike = this.toggleLike.bind(this);
  }

  // componentDidMount(){
  //
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.liked){
  //     this.props.createLike();
  //   } else {
  //     this.props.deleteLike();
  //   }
  // }

  toggleLike(e) {
    e.preventDefault();
    console.log(this.props.postId);
    if (this.props.liked) {
      this.props.deleteLike(this.props.postId);
    } else {
      this.props.createLike(this.props.postId);
    }
  }

  likes(){
    if (this.props.numLikes > 1) {
      return `${this.props.numLikes} likes`;
    } else {
      return `${this.props.numLikes} like`;
    }
  }

  render(){
    return (
      <div>
        <div className="post-action-icons">
          <div className="like-icon"><i className="fa fa-heart-o" onClick={this.toggleLike} aria-hidden="true"></i></div>
          <div className="comment-icon"><i className="fa fa-comment-o" aria-hidden="true"></i></div>
          <div className="bookmark-icon"><i className="fa fa-bookmark-o" aria-hidden="true"></i></div>
        </div>
        <div className="num-likes">{this.likes()}</div>
      </div>
    );
  }
}

export default LikesAndComments;
