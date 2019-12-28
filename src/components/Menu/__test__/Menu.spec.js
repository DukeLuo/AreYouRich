import React from 'react';
import { renderWithRouter } from '../../../utils/testHelper';
import Menu from '../index';

import '@testing-library/jest-dom/extend-expect';

describe('The Menu component', () => {

    let getAllByTestId;

    beforeEach(() => {
        ({ getAllByTestId } = renderWithRouter(<Menu />));
    });

    it('should have four items', () => {
        expect(getAllByTestId('item')).toHaveLength(4);
    });

    it('should have "应急能力检测"', () => {
        expect(getAllByTestId('item')[0]).toHaveTextContent('应急能力检测');
    });

    it('should have "偿债能力检测"', () => {
        expect(getAllByTestId('item')[1]).toHaveTextContent('偿债能力检测');
    });

    it('should have "储蓄能力检测"', () => {
        expect(getAllByTestId('item')[2]).toHaveTextContent('储蓄能力检测');
    });

    it('should have "资产生息能力检测"', () => {
        expect(getAllByTestId('item')[3]).toHaveTextContent('资产生息能力检测');
    });

});

