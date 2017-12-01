import {
  RECEIVE_FOLLOWERS,
  RECEIVE_FOLLOWEES,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follows_actions';

import merge from 'lodash/merge';
//
const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOWERS:
      return action.followers;
    case RECEIVE_FOLLOWEES:
      return action.followees;
    case RECEIVE_FOLLOW:
      return merge({}, state, action.follow);
    case REMOVE_FOLLOW:
      let newState = merge({}, state);
      delete newState[Object.keys(action.followId)[0]];
      return newState;
    default:
      return state;
  }
};

export default followsReducer;
