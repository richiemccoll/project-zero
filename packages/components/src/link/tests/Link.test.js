import React from 'react';
import { fireEvent, cleanup } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';
import { axe } from 'jest-axe';

import Link from '../';

describe('Link', () => {
    afterEach(async () => {
        await cleanup();
    });
    it('should have the correct attributes if element type is <a>', () => {
        const { getByText } = render(
            <React.Fragment>
                <Link href="href">Default</Link>
                <Link as="a" href="href" target="target" rel="rel">
                    Second
                </Link>
            </React.Fragment>,
        );
        const firstLink = getByText('Default');
        const secondLink = getByText('Second');
        expect(firstLink.nodeName).toEqual('A');
        expect(secondLink.nodeName).toEqual('A');
        expect(firstLink.href).toEqual('http://localhost/href');
        expect(secondLink.href).toEqual('http://localhost/href');
        expect(secondLink.target).toEqual('target');
        expect(secondLink.rel).toEqual('rel');
    });

    it('should handle onClick events', () => {
        const onClickSpy = jest.fn();
        const { getByText } = render(<Link onPress={onClickSpy}>Default</Link>);
        const link = getByText('Default');
        fireEvent.click(link);
        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });

    it('should have no accessibility issues', async () => {
        const { container } = render(
            <React.Fragment>
                <Link href="href">Default</Link>
                <Link as="a" href="href" target="target" rel="rel">
                    Second
                </Link>
            </React.Fragment>,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
