import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockResponse = (response) => {
    const mockJsonPromise = Promise.resolve(response);
    const mockFetchPromise = Promise.resolve({
        ok: true,
        headers: {
            get: () => 'application/json',
        },
        json: () => mockJsonPromise,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
};

const renderWithMockStore = (component, initState = {}) => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initState);
    const rendered = render(
        <Provider store={store}>
            <Router>
                {component}
            </Router>
        </Provider>
    );

    rendered.getMockStore = () => store;

    return rendered;
};

const renderWithRouter = (component) => {
    return render(
        <Router>
            {component}
        </Router>
    );
}

const mockClear = () => {
    global.fetch.mockClear();
    delete global.fetch;
};

const wait = (func) => {
    process.nextTick(() => func());
};

export {
    mockResponse,
    mockClear,
    wait,
    renderWithMockStore,
    renderWithRouter,
};