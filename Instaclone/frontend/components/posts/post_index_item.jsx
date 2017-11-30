import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndex from './post_index';
import LikesAndCommentsContainer from './likes_and_comments_container';

class PostIndexItem extends React.Component {
  render() {
    const { post, comments } = this.props;
    return (
      <li>
        <div className="post">
          <div className="post-item-top">
              <div className="post-item-top-text">
                <img className="author-profile-photo" src={post.author_photo}/>
                <div className="author-and-location">
                  <Link to={`/users/${post.author_id}`}><div className="post-author">{post.username}</div></Link>
                  <div className="post-location">{post.location}</div>
                </div>
            </div>
          </div>

          <img className="post-photo" src={post.img_url}/>

          <LikesAndCommentsContainer post={ post } commments={ comments } />

        </div>
      </li>
    );
  }


}


export default PostIndexItem;
