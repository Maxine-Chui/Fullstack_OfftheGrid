// import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comments_actions';
// import merge from 'lodash/merge';
//
// const commentsReducer = (state = {}, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_COMMENTS:
//       return merge({}, action.comments);
//     case RECEIVE_COMMENT:
//       merge({}, state, action.comment);
//     case REMOVE_COMMENT:
//       let newState = ({}, state);
//       delete newState[action.commentId];
//       return newState;
//     default:
//       return state;
//   }
// };
//
// export default commentsReducer;
