import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../actions/posts_actions';

import merge from 'lodash/merge';

const _initialState = {
  loading: true
};

const loadingReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, { loading: false });
    // case RECEIVE_POST:
    //   return merge({}, state, { loading: false });
    default:
      return state;
  }
};

export default loadingReducer;
