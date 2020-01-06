/* eslint-disable no-undefined */
import { handleActions } from 'redux-actions';
import {
    USER_REGISTER,
    USER_REGISTER_ERROR,
    USER_LOGIN,
    CLEAR_ERROR,
} from './type';
import * as richStorage from '../../utils/storage';

export default handleActions(
    {
        [USER_REGISTER]: (_, { payload, meta }) => {
            richStorage.setStorage('userId', payload.userId);
            richStorage.setStorage('tokenId', payload.tokenId);

            return {
                isRegisteredSuccess: meta.isRegisteredSuccess,
            };
        },
        [USER_REGISTER_ERROR]: (_, { meta }) => ({
            isRegisteredSuccess: meta.isRegisteredSuccess,
            errorMessage: '注册失败，请修改用户名重新注册',
        }),
        [CLEAR_ERROR]: () => ({ isRegisteredSuccess: undefined }),
    },
    {}
);
