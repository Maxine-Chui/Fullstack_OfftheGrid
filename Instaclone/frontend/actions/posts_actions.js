import * as APIPostsUtil from '../util/posts_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
// export const RECEIVE_POSTS_ERRORS = 'RECEIVE_POSTS_ERRORS';


export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

export const clearPosts = () => dispatch => (
  dispatch(receivePosts({}))
);

export const fetchPosts = () => dispatch => (
  APIPostsUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = () => dispatch => (
  APIPostsUtil.fetchPost().then(post => dispatch(receivePost(post)))
);

export const fetchUserPosts = (userId) => dispatch => (
  APIPostsUtil.fetchUserPosts(userId).then(posts => dispatch(receivePosts(posts)))
);

export const createPost = post => dispatch => (
  APIPostsUtil.createPost(post).then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
  APIPostsUtil.deletePost(postId).then(post => dispatch(removePost(postId)))
);

// export const receiveErrors = errors => ({
//   type: RECEIVE_POSTS_ERRORS,
//   errors
// });
