import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from  '../actions/posts_actions';

import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      return merge({}, state, {[action.post.id]: action.post});
    case REMOVE_POST:
    let newState = merge({}, state);
    delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
