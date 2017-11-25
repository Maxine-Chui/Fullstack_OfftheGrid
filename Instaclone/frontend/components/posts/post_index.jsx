import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <div>
        <ul className="post-feed">
          {
            this.props.posts.map(post => (
              <PostIndexItem
                key={post.id}
                post={ post }/>
            ))
          }
        </ul>
      </div>
    );
  }


}
export default PostIndex;
