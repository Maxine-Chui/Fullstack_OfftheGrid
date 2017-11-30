import { connect } from 'react-redux';
import {
  createLike,
  deleteLike,
  // createComment,
  // deleteComment
} from '../../actions/posts_actions';
import {
  fetchPostComments,
  fetchAllComments,
  createComment,
  deleteComment
} from '../../actions/comments_actions';

import LikesAndComments  from './likes_and_comments';


function postComments(state, postId){
  let allComments = Object.values(state.entities.comments);
  return allComments.filter(comment => comment.post_id === postId );
}

const mapStateToProps = (state, ownProps) => {
  return {
    numLikes: ownProps.post.likes,
    liked: ownProps.post.liked_by_current_user,
    postId: ownProps.post.id,
    // postComments: ownProps.post.comments,
    postComments: postComments(state, ownProps.post.id),
    // allComments: state.entities.comments,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createLike: (postId) => dispatch(createLike(postId)),
    deleteLike: (postId) => dispatch(deleteLike(postId)),
    // fetchPostComments: (postId) => dispatch(fetchPostComments(postId)),
    createComment: (postId, comment) => dispatch(createComment(postId, comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
    // deleteComment: (commentId) => dispatch(deleteComment(commentId)).then((postId)=> dispatch(fetchPostComments(postId)))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikesAndComments);
