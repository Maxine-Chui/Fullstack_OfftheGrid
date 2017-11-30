import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from  '../actions/posts_actions';
// import { LOGOUT_CURRENT_USER  } from '../actions/session_actions';

import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      // newState[action.post.id] = action.post;
      // return newState;
      return merge({}, state, action.post);
    case REMOVE_POST:
      // let newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
