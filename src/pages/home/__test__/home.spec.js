import React from 'react';
import { renderWithRouter } from '../../../utils/testHelper';
import { Home } from '..';

import '@testing-library/jest-dom/extend-expect';

describe('The home page', () => {
    it('should show a poem', () => {
        const content = '道可道，非常道。';
        const props = {
            poem: content,
            getPoem: jest.fn(),
        };
        const { getByTestId } = renderWithRouter(<Home {...props} />);

        expect(props.getPoem).toBeCalledTimes(1);
        expect(getByTestId('home')).toHaveTextContent(content);
    });
});
