import { createAction } from 'redux-actions';
import { GET_EMERGENCY_LEVEL, CLEAR_LEVEL, GET_LEVEL_ERROR } from './type';
import * as apis from '../../api';
import * as richStorage from '../../utils/storage';

const getEmergencyResponse = createAction(
    GET_EMERGENCY_LEVEL,
    (content) => content,
    () => ({ isGetLevelSuccess: true })
);
const getLevelError = createAction(
    GET_LEVEL_ERROR,
    (error) => new Error(error),
    () => ({ isGetLevelSuccess: false })
);
const getEmergencyLevel = (asset, expense) => (dispatch) =>
    apis
        .getEmergencyLevel(asset, expense, richStorage.getStorage('tokenId'))
        .then(
            (response) => dispatch(getEmergencyResponse(response)),
            (error) => dispatch(getLevelError(error))
        );

const clearDispaly = createAction(CLEAR_LEVEL);

export { getEmergencyLevel, clearDispaly };
