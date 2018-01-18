import { connect } from 'react-redux';
import {
  createLike,
  deleteLike,
  createBookmark,
  deleteBookmark
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
    bookmarked: ownProps.post.bookmarked_by_current_user,
    postId: ownProps.post.id,
    postComments: postComments(state, ownProps.post.id),
    currentUser: state.session.currentUser,
    age: ownProps.post.age
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createLike: (postId) => dispatch(createLike(postId)),
    deleteLike: (postId) => dispatch(deleteLike(postId)),
    createComment: (postId, comment) => dispatch(createComment(postId, comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    createBookmark: (postId) => dispatch(createBookmark(postId)),
    deleteBookmark: (postId) => dispatch(deleteBookmark(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikesAndComments);
