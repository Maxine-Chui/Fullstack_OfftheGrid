import { RECEIVE_USER } from '../actions/user_actions';
import {
  RECEIVE_FOLLOWERS,
  RECEIVE_FOLLOWEES,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follows_actions';

import merge from 'lodash/merge';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, action.user);
    // case RECEIVE_FOLLOWERS:
    //   return merge({}, action.followers);
    // case RECEIVE_FOLLOWEES:
    //   return merge({}, action.followees);
    // case RECEIVE_FOLLOW:
    //   return merge({}, state, action.follow);
    // case REMOVE_FOLLOW:
    //   let newState = merge({}, state);
    //   delete newState[action.followId];
    //   return newState;
    default:
      return state;
  }
};

export default userReducer;
