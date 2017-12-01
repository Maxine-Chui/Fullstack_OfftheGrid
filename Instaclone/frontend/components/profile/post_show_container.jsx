import { connect } from 'react-redux';
import {
  createLike,
  deleteLike,
} from '../../actions/posts_actions';
import {
  fetchPostComments,
  fetchAllComments,
  createComment,
  deleteComment
} from '../../actions/comments_actions';

import PostShow from './post_show';

function postComments(state, postId){
  let allComments = Object.values(state.entities.comments);
  return allComments.filter(comment => comment.post_id === postId );
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    numLikes: ownProps.post.likes,
    liked: ownProps.post.liked_by_current_user,
    postId: ownProps.post.id,
    postComments: postComments(state, ownProps.post.id),
    postOwner: ownProps.post.author_id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // fetchPostComments: (postId) => dispatch(fetchPostComments(postId)),
    createLike: (postId) => dispatch(createLike(postId)),
    deleteLike: (postId) => dispatch(deleteLike(postId)),
    createComment: (postId, comment) => dispatch(createComment(postId, comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
