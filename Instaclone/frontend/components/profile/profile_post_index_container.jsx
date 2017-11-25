import { connect } from 'react-redux';
import {
  fetchPost,
  createPost,
  deletePost,
  fetchUserPosts
} from '../../actions/posts_actions';
import ProfilePostIndex from './profile_post_index';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePostIndex);
