import { combineReducers } from 'redux';
import poemReducer from './poem/reducer';
import userReducer from './user/reducer';
import financeReducer from './finance/reducer';

const reducers = combineReducers({
    poemReducer,
    userReducer,
    financeReducer,
});

export default reducers;
