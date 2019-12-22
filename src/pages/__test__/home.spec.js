import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';
import Home from '../home';

import '@testing-library/jest-dom/extend-expect';

describe('The home page', () => {

    it('should display a poem', (done) => {
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

        const { getByTestId } = render( // 5
            <Router>
                <Home />
            </Router>
        );

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('/api/poem', { 'method': 'GET' });

        process.nextTick(() => { // 6
            expect(getByTestId('home')).toHaveTextContent('道可道，非常道。');

            global.fetch.mockClear(); // 7
            delete global.fetch;
            done(); // 8
        });

    });

});

