import { combineReducers } from 'redux';
import sessionReducer from './reducer/session_reducer.js';

const entitiesReducer = combineReducers({
  session: sessionReducer
})
