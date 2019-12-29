import { handleAction } from 'redux-actions';
import { GET_A_POEM } from './type';

const initState = {
    poem: '',
};

export default handleAction(
    GET_A_POEM,
    (state, { payload }) => ({
        ...state,
        poem: payload,
    }),
    initState,
);