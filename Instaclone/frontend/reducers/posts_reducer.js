import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from  '../actions/posts_actions';
// import { LOGOUT_CURRENT_USER  } from '../actions/session_actions';

import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
    console.log('i am receive posts');
      return merge({}, action.posts);
    case RECEIVE_POST:
    console.log('i am receive post');
      return merge({}, state, {[action.post.id]: action.post});
    case REMOVE_POST:
    console.log('i am remove post');
      let newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
