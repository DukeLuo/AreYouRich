import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../type';
import * as actions from '../action';
import { userRegister as mockUserRegister } from '../../../api';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

jest.mock('../../../api');

describe('The user action', () => {
    const username = '小明';
    const password = '123456';

    beforeEach(() => store.clearActions());

    it('should create a successfully registered action', () => {
        const expectedAction = [
            {
                type: types.USER_REGISTER,
                payload: {
                    userId: '123',
                    tokenId: '123',
                },
                meta: {
                    isRegisteredSuccess: true,
                },
            },
        ];

        mockUserRegister.mockResolvedValueOnce({
            userId: '123',
            tokenId: '123',
        });

        return store.dispatch(actions.register(username, password)).then(() => {
            expect(mockUserRegister).toBeCalledWith(username, password);
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it('should create a failed registration action', () => {
        const expectedAction = [
            {
                type: types.USER_REGISTER_ERROR,
                error: true,
                payload: new Error({
                    status: 400,
                }),
                meta: {
                    isRegisteredSuccess: false,
                },
            },
        ];

        mockUserRegister.mockRejectedValueOnce({
            status: 400,
        });

        return store.dispatch(actions.register(username, password)).then(() => {
            expect(mockUserRegister).toBeCalledWith(username, password);
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
