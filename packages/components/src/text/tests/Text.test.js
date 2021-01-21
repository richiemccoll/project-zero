import React from 'react';
import { renderWithTheme as render } from '@Utils/test-utils';
import Text from '../Text';

describe('Text', () => {
    it('renders children', () => {
        const { getByText } = render(<Text>Hello</Text>);
        const text = getByText('Hello');
        expect(text.nodeName).toEqual('SPAN');
    });
});
