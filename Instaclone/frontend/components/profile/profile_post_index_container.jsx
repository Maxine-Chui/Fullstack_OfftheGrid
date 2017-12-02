import { connect } from 'react-redux';
import {
  fetchPost,
  createPost,
  deletePost,
  fetchUserPosts,
  clearPosts,
  createLike,
  deleteLike
} from '../../actions/posts_actions';
import {
  fetchAllComments,
  fetchPostComments,
} from '../../actions/comments_actions';
import ProfilePostIndex from './profile_post_index';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
    fetchAllComments: () => dispatch(fetchAllComments()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePostIndex);
