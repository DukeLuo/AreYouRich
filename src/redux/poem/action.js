import { GET_A_POEM } from './type';
import * as apis from '../../api';

const getPoem = () =>
    (dispatch) => apis.getPoem().then(
        ({ content }) => dispatch({
            type: GET_A_POEM,
            payload: content,
        }));

export {
    getPoem,
};