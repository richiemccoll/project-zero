import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';
import Text from '../Text';

describe('Text', () => {
    afterEach(async () => {
        await cleanup();
    });
    it('renders children', () => {
        const { getByText } = render(<Text>Hello</Text>);
        const text = getByText('Hello');
        expect(text.nodeName).toEqual('SPAN');
    });
});
