import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';
import userEvent from '@testing-library/user-event';

import { axe } from 'jest-axe';

import Box from '../../box';
import Link from '../../link';

import SkipLink from '../';

function Ui() {
    return (
        <Box>
            <SkipLink id="main-content">Skip to Content</SkipLink>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main id="main-content">
                <button data-testid="main-content-button">Click</button>
            </main>
        </Box>
    );
}

describe('SkipLink', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should have no accessibility issues', async () => {
        const { container } = render(<Ui />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('should focus the main content via keyboard tab + enter', () => {
        const { getByText, getByTestId } = render(<Ui />);
        userEvent.tab();
        const skipLink = getByText('Skip to Content');
        expect(skipLink).toHaveFocus();
        userEvent.type(skipLink, '{enter}');
        userEvent.tab();
        expect(getByTestId('main-content-button')).toHaveFocus();
    });
});
