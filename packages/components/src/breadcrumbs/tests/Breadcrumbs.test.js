import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';
import { axe } from 'jest-axe';

import Breadcrumbs from '../';

function Ui() {
    return (
        <Breadcrumbs>
            <Breadcrumbs.Link href="#home">Home</Breadcrumbs.Link>
            <Breadcrumbs.Link href="#about">About</Breadcrumbs.Link>
            <Breadcrumbs.Link href="#writing" selected>
                Writing
            </Breadcrumbs.Link>
        </Breadcrumbs>
    );
}

describe('Breadcrumbs', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should have no accessibility issues', async () => {
        const { container } = render(<Ui />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('should render a nav with an ordered list of links', () => {
        const { getByLabelText } = render(<Ui />);
        const nav = getByLabelText('Breadcrumb');
        const links = nav.querySelectorAll('a');
        expect(links.length).toEqual(3);
        const lastLink = links[links.length - 1];
        expect(lastLink).toHaveAttribute('aria-current', 'page');
    });
});
