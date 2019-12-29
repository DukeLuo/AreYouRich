/* eslint-disable no-undefined */
import poemReducer from '../reducer';
import * as types from '../type';

describe('The poem reducer', () => {
    it('should return the initial state', () => {
        expect(poemReducer(undefined, {})).toEqual({
            poem: '',
        });
    });

    it('should handle GET_A_POEM', () => {
        const content = '道可道，非常道。';
        const action = {
            type: types.GET_A_POEM,
            payload: content,
        };

        expect(poemReducer(undefined, action)).toEqual({
            poem: content,
        });
        expect(poemReducer({ poem: '锄禾日当午' }, action)).toEqual({
            poem: content,
        });
    });
});
