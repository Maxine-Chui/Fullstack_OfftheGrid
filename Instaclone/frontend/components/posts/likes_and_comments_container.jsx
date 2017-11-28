import { connect } from 'react-redux';
import {
  createLike,
  deleteLike
} from '../../actions/posts_actions';
import LikesAndComments  from './likes_and_comments';

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUser.id;
  return {
    numLikes: ownProps.post.likes,
    liked: Boolean(ownProps.post.liked_by_current_user)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createLike: (postId) => dispatch(createLike(ownProps.post.id)),
    deleteLike: (postId) => dispatch(deleteLike(ownProps.post.id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikesAndComments);
