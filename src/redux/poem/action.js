import { createAction } from 'redux-actions';
import { GET_A_POEM } from './type';
import * as apis from '../../api';

const getPoemResponse = createAction(GET_A_POEM, content => content);
const getPoem = () =>
    (dispatch) => apis.getPoem().then(
        ({ content }) => dispatch(getPoemResponse(content)),
    );

export {
    getPoem,
};