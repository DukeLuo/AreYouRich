import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../index';

import '@testing-library/jest-dom/extend-expect';

describe('The Dashboard component', () => {
    it('should show Excellent', () => {
        const { getByTestId } = render(<Dashboard score={90} />);

        expect(getByTestId('level')).toHaveTextContent('Excellent');
    });

    it('should show Very Good', () => {
        const { getByTestId } = render(<Dashboard score={82} />);

        expect(getByTestId('level')).toHaveTextContent('Very Good');
    });

    it('should show Good', () => {
        const { getByTestId } = render(<Dashboard score={73} />);

        expect(getByTestId('level')).toHaveTextContent('Good');
    });

    it('should show Accepted', () => {
        const { getByTestId } = render(<Dashboard score={64} />);

        expect(getByTestId('level')).toHaveTextContent('Accepted');
    });

    it('should show Unsatisfactory', () => {
        const { getByTestId } = render(<Dashboard score={20} />);

        expect(getByTestId('level')).toHaveTextContent('Unsatisfactory');
    });
});
