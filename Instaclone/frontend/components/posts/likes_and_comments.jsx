import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LikesAndComments extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   liked: this.props.liked,
    //   numLikes: this.props.numLikes
    // };
  this.toggleLike = this.toggleLike.bind(this);
  }

  // componentDidMount(){
  //
  // }

  //
  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props);
  //   console.log(nextProps);
  //   if (this.props.numLikes !== nextProps.numLikes){
  //     this.setState({
  //       liked: nextProps.liked,
  //       numLikes: nextProps.numLikes
  //     });
  //   }
  // }
  componentWillUpdate(nextProps, nextState){
    console.log(this.props);
    console.log(nextProps);
    if (this.props.numLikes !== nextProps.numLikes){
      this.setState({
        liked: this.props.liked,
        numLikes: this.props.numLikes
      });
    }
  }

  toggleLike(e) {
    e.preventDefault();
    // console.log(this.props.postId);
    const like = this.props.liked;
    console.log(like);
    if (like) {
      return this.props.deleteLike(this.props.postId);
    } else {
      return this.props.createLike(this.props.postId);
    }
  }


  // like(e){
  //   e.preventDefault();
  //   const like = this.props.liked;
  //   this.props.createLike(this.props.postId);
  // }
  //
  // unlike(){
  //   return this.props.deleteLike(this.props.postId);
  // }

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

  render(){
    return (
      <div>
        <div className="post-action-icons">
          <div className="like-icon">{this.toggleLikeButton()}</div>
          <div className="comment-icon"><i className="fa fa-comment-o" aria-hidden="true"></i></div>
          <div className="bookmark-icon"><i className="fa fa-bookmark-o" aria-hidden="true"></i></div>
        </div>
        <div className="num-likes">{this.likes()}</div>
      </div>
    );
  }
}
// <div className="like-icon"><i className="fa fa-heart-o" onClick={this.toggleLike} aria-hidden="true"></i></div>
export default LikesAndComments;
