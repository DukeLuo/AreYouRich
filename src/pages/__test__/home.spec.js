import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Home from '../home';
import * as poem from '../../redux/poem/constant';

import '@testing-library/jest-dom/extend-expect';

describe('The home page', () => {

    it('should display a poem', (done) => {
        const middlewares = [thunk];
        const mockStore = configureStore(middlewares);
        const store = mockStore({
            poemReducer: {
                poem: '',
            }
        });

        const mockSuccessResponse = { // 1
            content: '道可道，非常道。',
        };
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            ok: true,
            headers: {
                get: () => 'application/json',
            },
            json: () => mockJsonPromise,
        });
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise); // 4

        const { getByTestId } = render(// 5
            <Provider store={store}>
                <Router>
                    <Home />
                </Router>
            </Provider>);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('/api/poem', { 'method': 'GET' });

        process.nextTick(() => { // 6
            const action = store.getActions()[0];

            expect(action.type).toBe(poem.GET_A_POEM);
            expect(action.payload).toBe('道可道，非常道。');

            global.fetch.mockClear(); // 7
            delete global.fetch;
            done(); // 8
        });
    });

});

