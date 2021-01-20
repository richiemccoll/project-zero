import React from 'react';
import { renderWithTheme } from '../../../utils/test-utils';
import Heading from '../Heading';

describe('Heading', () => {
    it('renders children', () => {
        const { getByText } = renderWithTheme(<Heading>Hello</Heading>);
        const heading = getByText('Hello');
        expect(heading.nodeName).toEqual('H2');
    });
});
