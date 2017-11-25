import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndex from './post_index';

class PostIndexItem extends React.Component {

  render() {
    return (
      <li>
        <div className="post">
          <div className="post-item-top">
              <div className="post-item-top-text">
                <Link to={`/users/${this.props.post.author_id}`}><div className="post-author">{this.props.post.username}</div></Link>
                <div className="post-location">{this.props.post.location}</div>
              </div>
            </div>
            <img className="post-photo" src={this.props.post.img_url}/>
        </div>
      </li>
    );
  }


}


export default PostIndexItem;
