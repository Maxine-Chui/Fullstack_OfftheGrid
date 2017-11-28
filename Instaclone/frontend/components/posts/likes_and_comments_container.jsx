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
    liked: Boolean(ownProps.post.liked_by_current_user),
    postId: ownProps.post.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createLike: (postId) => dispatch(createLike(postId)),
    deleteLike: (postId) => dispatch(deleteLike(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikesAndComments);
