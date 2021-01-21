import React from 'react';
import { renderWithTheme as render } from '@Utils/test-utils';

import Flex from '../Flex';

describe('Flex', () => {
    it('should render children', () => {
        const { getByText } = render(<Flex>Default</Flex>);
        getByText('Default');
    });
});
