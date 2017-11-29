import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from  '../actions/posts_actions';
// import { LOGOUT_CURRENT_USER  } from '../actions/session_actions';

import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
    // debugger;
      let test1 = { test: { one: [1, 2, 3]} };
      let test2 = { test: { one: [1, 2, 3, 4, 5]} };
      console.log(merge({}, test2, test1));

      // const id = action.post.id;
      // const oldComments = state[id].comments;
      // const newComments = action.post[id].comments;
      return merge({}, state, action.post);
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
