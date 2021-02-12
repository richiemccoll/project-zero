import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';

import Flex from '../Flex';

describe('Flex', () => {
    afterEach(async () => {
        await cleanup();
    });
    it('should render children', () => {
        const { getByText } = render(<Flex>Default</Flex>);
        getByText('Default');
    });
});
