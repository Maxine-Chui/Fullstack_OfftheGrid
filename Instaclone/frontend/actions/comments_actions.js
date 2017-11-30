import * as APICommentsUtil from '../util/comments_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT ='REMOVE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';

const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

const receivePostComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchAllComments = () => dispatch => (
  APICommentsUtil.fetchAllComments().then(comments => dispatch(receiveAllComments(comments)))
);

export const fetchPostComments = (postId) => dispatch => (
  APICommentsUtil.fetchPostComments(postId).then(comments => dispatch(receivePostComments(comments)))
);

// export const fetchComments = () => dispatch => (
//   APICommentsUtil.fetchComments().then(comments => dispatch(receivePostComments(comments, postId)))
// );

export const createComment = (postId, comment) => dispatch => (
  APICommentsUtil.createComment(postId, comment).then(commentMade => dispatch(receiveComment(commentMade)))
);

export const deleteComment = (commentId) => dispatch => (
  APICommentsUtil.deleteComment(commentId).then(commentId => dispatch(removeComment(commentId)))
);
