import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/test-utils';
import Heading from '../Heading';

describe('Heading', () => {
    afterEach(async () => {
        await cleanup();
    });
    it('renders children', () => {
        const { getByText } = renderWithTheme(<Heading>Hello</Heading>);
        const heading = getByText('Hello');
        expect(heading.nodeName).toEqual('H2');
    });
});
