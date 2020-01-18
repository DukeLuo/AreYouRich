import { handleActions, combineActions } from 'redux-actions';
import {
    GET_EMERGENCY_LEVEL,
    GET_INTEREST_LEVEL,
    GET_SAVING_LEVEL,
    CLEAR_LEVEL,
    GET_LEVEL_ERROR,
    GET_FINANCE_REPORT,
} from './type';

export default handleActions(
    {
        [combineActions(
            GET_EMERGENCY_LEVEL,
            GET_INTEREST_LEVEL,
            GET_SAVING_LEVEL
        )]: (_, { payload, meta }) => ({
            level: (+payload.percent).toFixed(2),
            description: payload.comment,
            isGetLevelSuccess: meta.isGetLevelSuccess,
        }),
        [CLEAR_LEVEL]: () => ({
            description: '',
        }),
        [GET_LEVEL_ERROR]: (_, { meta }) => ({
            isGetLevelSuccess: meta.isGetLevelSuccess,
            errorMessage: '计算失败，请检查输入值',
            description: '计算失败，请检查输入值',
        }),
        [GET_FINANCE_REPORT]: (_, { payload }) => ({
            report: payload,
        }),
    },
    {}
);
