/* eslint-disable no-undefined */
import userReducer from '../reducer';
import * as types from '../type';
import * as mockRichStorage from '../../../utils/storage';

describe('The poem reducer', () => {
    beforeAll(() => {
        mockRichStorage.getStorage = jest.fn();
        mockRichStorage.setStorage = jest.fn();
    });

    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual({});
    });

    it('should handle USER_REGISTER', () => {
        const action = {
            type: types.USER_REGISTER,
            payload: {
                userId: '123',
                tokenId: '123',
            },
            meta: {
                isRegisteredSuccess: true,
            },
        };
        const exceptedState = {
            isRegisteredSuccess: true,
        };

        expect(userReducer(undefined, action)).toEqual(exceptedState);
        expect(userReducer({ isRegisteredSuccess: false }, action)).toEqual(
            exceptedState
        );
        expect(mockRichStorage.setStorage).toBeCalledWith('userId', '123');
        expect(mockRichStorage.setStorage).toBeCalledWith('tokenId', '123');
    });

    it('should handle USER_REGISTER_ERROR', () => {
        const action = {
            type: types.USER_REGISTER_ERROR,
            meta: {
                isRegisteredSuccess: false,
            },
        };
        const exceptedState = {
            isRegisteredSuccess: false,
            errorMessage: '注册失败，请修改用户名重新注册',
        };

        expect(userReducer(undefined, action)).toEqual(exceptedState);
        expect(userReducer({ isRegisteredSuccess: true }, action)).toEqual(
            exceptedState
        );
    });
});
