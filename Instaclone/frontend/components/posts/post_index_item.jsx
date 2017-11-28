import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndex from './post_index';
import LikesAndCommentsContainer from './likes_and_comments_container';

class PostIndexItem extends React.Component {

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

  render() {
    return (
      <li>
        <div className="post">
          <div className="post-item-top">
              <div className="post-item-top-text">
                <img className="author-profile-photo" src={this.props.post.author_photo}/>
                <div className="author-and-location">
                  <Link to={`/users/${this.props.post.author_id}`}><div className="post-author">{this.props.post.username}</div></Link>
                  <div className="post-location">{this.props.post.location}</div>
                </div>
            </div>
          </div>

          <img className="post-photo" src={this.props.post.img_url}/>

          <LikesAndCommentsContainer post={ this.props.post }/>
          <div className="caption-snippet">
            <span className="caption-author">{this.authorCaption()}</span>
            <span className="caption-body">{this.caption()}</span>
          </div>

        </div>
      </li>
    );
  }


}


export default PostIndexItem;
