import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LikesAndComments extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   liked: this.props.liked
    // };
  }

  // componentDidMount(){
  //
  // }
  //
  // toggleLike() {
  //
  // }

  render(){
    return (
      <div>
        <div className="post-action-icons">
          <div className="like-icon"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
          <div className="comment-icon"><i class="fa fa-comment-o" aria-hidden="true"></i></div>
          <div className="bookmark-icon"><i class="fa fa-bookmark-o" aria-hidden="true"></i></div>
        </div>
      </div>
    );
  }
}

export default LikesAndComments;
