import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';
import Box from '../';

const NODE_TYPES = {
    div: 'DIV',
    span: 'SPAN',
};

describe('Box', () => {
    afterEach(async () => {
        await cleanup();
    });
    it('should render children and block by default', () => {
        const { getByText } = render(<Box>Default</Box>);
        const box = getByText('Default');
        expect(box.nodeName).toEqual(NODE_TYPES.div);
    });

    it(`should accept the 'as' prop for inline blocks`, () => {
        const { getByText } = render(<Box as="span">Default</Box>);
        const box = getByText('Default');
        expect(box.nodeName).toEqual(NODE_TYPES.span);
    });
});
