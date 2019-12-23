import {GET_A_POEM} from './constant';

const initState = {
    poem: '',
};

export default (state = initState, action) => {
    switch(action.type) {
        case GET_A_POEM: {
            return {
                ...state,
                poem: action.payload,
            };
        }
        default:
            return state;
    }
}