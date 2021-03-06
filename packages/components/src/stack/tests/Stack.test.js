import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';
import Stack from '../';

const NODE_TYPES = {
    div: 'DIV',
};

describe('Stack', () => {
    afterEach(async () => {
        await cleanup();
    });
    it('should render children and block by default', () => {
        const { getByText } = render(<Stack>Default</Stack>);
        const box = getByText('Default');
        expect(box.nodeName).toEqual(NODE_TYPES.div);
    });
});
