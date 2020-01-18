import { createAction } from 'redux-actions';
import {
    GET_EMERGENCY_LEVEL,
    GET_INTEREST_LEVEL,
    GET_SAVING_LEVEL,
    CLEAR_LEVEL,
    GET_LEVEL_ERROR,
} from './type';
import * as apis from '../../api';
import * as richStorage from '../../utils/storage';

const getLevelError = createAction(
    GET_LEVEL_ERROR,
    (error) => new Error(error),
    () => ({ isGetLevelSuccess: false })
);
const getLevelResponse = (type, response) =>
    createAction(
        type,
        (payload) => payload,
        () => ({ isGetLevelSuccess: true })
    )(response);

const getEmergencyLevel = (asset, expense) => (dispatch) =>
    apis
        .getEmergencyLevel(asset, expense, richStorage.getStorage('tokenId'))
        .then(
            (response) =>
                dispatch(getLevelResponse(GET_EMERGENCY_LEVEL, response)),
            (error) => dispatch(getLevelError(error))
        );

const getInterestLevel = (invest, asset) => (dispatch) =>
    apis
        .getInterestLevel(invest, asset, richStorage.getStorage('tokenId'))
        .then(
            (response) =>
                dispatch(getLevelResponse(GET_INTEREST_LEVEL, response)),
            (error) => dispatch(getLevelError(error))
        );

const getSavingLevel = (saving, salary) => (dispatch) =>
    apis.getSavingLevel(saving, salary, richStorage.getStorage('tokenId')).then(
        (response) => dispatch(getLevelResponse(GET_SAVING_LEVEL, response)),
        (error) => dispatch(getLevelError(error))
    );

const clearDispaly = createAction(CLEAR_LEVEL);

export { getEmergencyLevel, getInterestLevel, getSavingLevel, clearDispaly };
