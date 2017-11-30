import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import userReducer from './user_reducer';
import commentsReducer from './comments_reducer';
import followsReducer from './follows_reducer';

const entitiesReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  comments: commentsReducer,
  follows: followsReducer
});

export default entitiesReducer;
