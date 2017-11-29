import * as APICommentsUtil from '../util/comments_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT ='REMOVE_COMMENT';

const receiveComments = (comments, postId) => ({
  type: RECEIVE_COMMENTS,
  comments,
  postId
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchPostComments = (postId) => dispatch => (
  APICommentsUtil.fetchPostComments(postId).then(comments => dispatch(receiveComments(comments, postId)))
);

// export const createComment = (postId, comment) => dispatch => (
//   APICommentsUtil.createComment(postId, comment).then(comment => dispatch(receiveComment(comment)))
// );
//
// export const deleteComment = (commentId) => dispatch => (
//   APICommentsUtil.deleteComment(commentId).then(comment => dispatch(removeComment(comment)))
)
