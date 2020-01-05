import { combineReducers } from 'redux';
import poemReducer from './poem/reducer';
import userReducer from './user/reducer';

const reducers = combineReducers({
    poemReducer,
    userReducer,
});

export default reducers;
