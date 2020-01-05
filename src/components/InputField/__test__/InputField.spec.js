import React from 'react';
import { render } from '@testing-library/react';
import InputField from '../index';

import '@testing-library/jest-dom/extend-expect';

describe('The InputField component', () => {
    it('should contain text input and number input', () => {
        const config = [
            {
                type: 'text',
                id: 'test-field-1',
                description: '文本输入框',
            },
            {
                type: 'number',
                id: 'test-field-2',
                description: '数字输入框',
            },
        ];
        const { getByTestId, getByLabelText } = render(
            <InputField config={config} />
        );

        expect(getByTestId('input-field')).toHaveTextContent('文本输入框');
        expect(getByTestId('input-field')).toHaveTextContent('数字输入框');
        expect(getByLabelText('文本输入框')).toHaveAttribute('type', 'text');
        expect(getByLabelText('数字输入框')).toHaveAttribute('type', 'number');
    });

    it('should be restrictions on text input', () => {
        const config = [
            {
                type: 'text',
                id: 'test-field-1',
                description: '文本输入框',
                options: {
                    minLength: 4,
                    maxLength: 8,
                    size: 10,
                },
            },
        ];
        const { getByTestId, getByLabelText } = render(
            <InputField config={config} />
        );

        expect(getByTestId('input-field')).toHaveTextContent('文本输入框');
        expect(getByLabelText('文本输入框')).toHaveAttribute('minlength', '4');
        expect(getByLabelText('文本输入框')).toHaveAttribute('maxlength', '8');
        expect(getByLabelText('文本输入框')).toHaveAttribute('size', '10');
    });
});
