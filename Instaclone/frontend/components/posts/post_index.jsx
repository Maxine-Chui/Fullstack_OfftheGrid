import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';
// import LikesAndCommentsContainer from './likes_and_comments_container';


class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchAllComments();
  }

  render() {
    return(
      <div>
        <ul className="post-feed">
          {
            this.props.posts.map(post => (
                <PostIndexItem
                  key={post.id}
                  post={ post }
                  comments={post.comments}/>

            ))
          }

        </ul>
      </div>
    );
  }


}
export default PostIndex;
