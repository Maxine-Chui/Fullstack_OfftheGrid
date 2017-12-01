import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_ALL_COMMENTS
} from '../actions/comments_actions';

import merge from 'lodash/merge';
//
const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENTS:
      return action.comments;
      // return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, action.comment);
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      // console.log(action.commentId);
      delete newState[Object.keys(action.commentId)[0]];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
