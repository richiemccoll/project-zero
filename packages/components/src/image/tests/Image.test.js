import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';
import { axe } from 'jest-axe';

import Image from '../';

describe('Image', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should have no accessibility issues', async () => {
        const { container } = render(<Image src="test" />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
