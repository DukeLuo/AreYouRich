import { combineReducers } from 'redux';
import poemReducer from './poem/reducer';

const reducers = combineReducers({
    poemReducer,
});

export default reducers;
