import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';

import { axe } from 'jest-axe';

import Clipboard from '../';
import clipboardService from '../services/clipboard';
import { act } from 'react-dom/test-utils';

jest.mock('../services/clipboard');

const DEFAULT_PROPS = {
    text: 'Text to copy',
};

describe('Clipboard', () => {
    let clipboardSpy;

    beforeEach(() => {
        clipboardSpy = jest.spyOn(clipboardService, 'copy');
    });

    afterEach(async () => {
        await cleanup();
        clipboardSpy = null;
    });

    it('should have no accessibility issues', async () => {
        const { container } = render(<Clipboard {...DEFAULT_PROPS} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('should copy the text to clipboard on click / enter', async () => {
        const { getByText } = render(<Clipboard {...DEFAULT_PROPS} />);
        const button = getByText('Copy');
        await act(async () => {
            fireEvent.click(button);
        });
        expect(clipboardSpy).toHaveBeenCalledTimes(1);
        expect(clipboardSpy).toBeCalledWith(DEFAULT_PROPS.text);
        getByText('Copied!');
    });

    it('should render custom Icons', async () => {
        const { getByTestId } = render(
            <Clipboard
                {...DEFAULT_PROPS}
                icon={
                    <svg
                        data-testid="custom-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        stroke="currentcolor"
                    >
                        <circle cx="14" cy="14" r="12" />
                        <path d="M23 23 L30 30" />
                    </svg>
                }
            />,
        );
        getByTestId('custom-icon');
    });
});
