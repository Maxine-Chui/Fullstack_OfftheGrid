import { connect } from 'react-redux';
import {
  fetchPosts,
  fetchPost,
  createPost,
  deletePost,
  fetchUserPosts,
  createLike,
  deleteLike
} from '../../actions/posts_actions';
// import selectAllPosts from '../../reducers/selectors';

import PostIndex from './post_index';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts)
    // posts: selectAllPosts(state)
    // .map(id => state.posts[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    // fetchUserPosts: () => dispatch(fetchUserPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
