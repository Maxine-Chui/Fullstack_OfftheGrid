// import * as APILikesUtil from '../util/likes_api_util';
//
// export const RECEIVE_LIKE = 'RECEIVE_LIKE';
// export const REMOVE_LIKE = 'REMOVE_LIKE';
//
// export const receiveLike = (post, like) => ({
//   type: RECEIVE_LIKE,
//   like,
//   post
// });
//
// export const removeLike = (post, likeId) => ({
//   type: REMOVE_LIKE,
//   likeId,
//   post
// });
//
// export const createLike = like => dispatch => (
//   APILikesUtil.createLike(like).then(post => dispatch(receiveLike(like)))
// );
//
// export const deleteLike = likeId => dispatch => (
//   APILikesUtil.deleteLike(likeId).then(post => dispatch(removeLike(likeId)))
// );
