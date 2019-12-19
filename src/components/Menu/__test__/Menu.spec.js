import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';
import Menu from '../index';

import '@testing-library/jest-dom/extend-expect';

describe('The Menu component', () => {

    it('should have four items', () => {
        const { getAllByTestId } = render(
            <Router>
                <Menu />
            </Router>
        );

        expect(getAllByTestId('item')).toHaveLength(4);
    });

    it('should have "应急能力检测"', () => {
        const { getAllByTestId } = render(
            <Router>
                <Menu />
            </Router>
        );

        expect(getAllByTestId('item')[0]).toHaveTextContent('应急能力检测');
    });

    it('should have "偿债能力检测"', () => {
        const { getAllByTestId } = render(
            <Router>
                <Menu />
            </Router>
        );

        expect(getAllByTestId('item')[1]).toHaveTextContent('偿债能力检测');
    });

    it('should have "储蓄能力检测"', () => {
        const { getAllByTestId } = render(
            <Router>
                <Menu />
            </Router>
        );

        expect(getAllByTestId('item')[2]).toHaveTextContent('储蓄能力检测');
    });

    it('should have "资产生息能力检测"', () => {
        const { getAllByTestId } = render(
            <Router>
                <Menu />
            </Router>
        );

        expect(getAllByTestId('item')[3]).toHaveTextContent('资产生息能力检测');
    });

});

