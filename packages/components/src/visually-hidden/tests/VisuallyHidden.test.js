import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';
import { axe } from 'jest-axe';

import VisuallyHidden from '../';

function IconUi() {
    return (
        <React.Fragment>
            <svg
                viewBox="0 0 32 32"
                width={'1em'}
                height={'1em'}
                fill="none"
                stroke={'currentcolor'}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
                strokeWidth={4}
            >
                <path d="M12 30 L24 16 12 2" />
            </svg>
            <VisuallyHidden>Arrow Rights</VisuallyHidden>
        </React.Fragment>
    );
}

describe('VisuallyHidden', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should have no accessibility issues', async () => {
        const { container } = render(<IconUi />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
