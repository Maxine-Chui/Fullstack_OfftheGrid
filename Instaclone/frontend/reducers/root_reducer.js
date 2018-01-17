import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
// import loadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  entities: entitiesReducer,
  // loading: loadingReducer
});

export default rootReducer;
