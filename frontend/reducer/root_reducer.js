import { combineReducers } from 'redux';
import entities from './entities_reducer.js';
import session from './session_reducer.js';

const rootReducer = combineReducers({
    session
})

export default rootReducer
