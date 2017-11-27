import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import userReducer from './user_reducer';

const entitiesReducer = combineReducers({
  posts: postsReducer,
  user: userReducer
});

export default entitiesReducer;
