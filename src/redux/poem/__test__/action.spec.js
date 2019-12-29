import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../type';
import * as actions from '../action';
import { getPoem as mockGetPoem } from '../../../api';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
    poemReducer: {
        poem: '',
    },
});

jest.mock('../../../api');

describe('The poem action', () => {
    it('should create an action to get a poem', () => {
        const content = '道可道，非常道。';
        const expectedAction = [
            {
                type: types.GET_A_POEM,
                payload: content,
            },
        ];

        mockGetPoem.mockResolvedValueOnce({
            content,
        });

        return store.dispatch(actions.getPoem()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
