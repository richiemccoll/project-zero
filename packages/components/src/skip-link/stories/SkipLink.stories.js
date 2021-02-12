import React from 'react';
import Box from '../../box';
import Link from '../../link';
import SkipLink from '../SkipLink';

export default {
    title: 'SkipLink',
    component: SkipLink,
    argTypes: {},
};

const DefaultTemplate = () => (
    <Box>
        <SkipLink id="main-content">Skip to Content</SkipLink>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="to">Home</Link>
                    </li>
                    <li>
                        <Link href="link">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main id="main-content">
            <button data-testid="main-content-button">Click</button>
        </main>
    </Box>
);

export const Default = DefaultTemplate.bind({});
