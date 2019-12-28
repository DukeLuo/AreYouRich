import React from 'react';
import Home from '../home';
import { mockResponse, mockClear, wait, renderWithMockStore } from '../../utils/testHelper';
import * as poem from '../../redux/poem/type';

import '@testing-library/jest-dom/extend-expect';

describe('The home page', () => {

    afterEach(() => {
        mockClear();
    });

    it.skip('should dispatch a action with poem', (done) => {
        mockResponse({
            content: '道可道，非常道。',
        });

        const { getMockStore } = renderWithMockStore(<Home />, {
            poemReducer: {
                poem: '',
            }
        });

        wait(() => {
            const action = getMockStore().getActions()[0];

            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(global.fetch).toHaveBeenCalledWith('/api/poem', { 'method': 'GET' });
            expect(action.type).toBe(poem.GET_A_POEM);
            expect(action.payload).toBe('道可道，非常道。');
            done();
        });
    });

});
