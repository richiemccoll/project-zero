import React from 'react';
import { fireEvent, cleanup } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';
import { axe } from 'jest-axe';

import Tabs from '../';
import { keyCodes } from '../../constants';

function TabsUi() {
    return (
        <Tabs.Container>
            <Tabs.List>
                <Tabs.Tab>Tab</Tabs.Tab>
                <Tabs.Tab>Tab</Tabs.Tab>
                <Tabs.Tab>Tab</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panels>
                <Tabs.Panel>Tab one</Tabs.Panel>
                <Tabs.Panel>Tab two</Tabs.Panel>
                <Tabs.Panel>Tab three</Tabs.Panel>
            </Tabs.Panels>
        </Tabs.Container>
    );
}

function TabsUiArbitrary() {
    return (
        <Tabs.Container>
            <Tabs.List>
                <Tabs.Tab>Tab One</Tabs.Tab>
                <div>One</div>
                <Tabs.Tab>Tab Two</Tabs.Tab>
                <div>Two</div>
                <Tabs.Tab>Tab Three</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panels>
                <Tabs.Panel>Tab one</Tabs.Panel>
                <Tabs.Panel>Tab two</Tabs.Panel>
                <Tabs.Panel>Tab three</Tabs.Panel>
            </Tabs.Panels>
        </Tabs.Container>
    );
}

const RIGHT_KEYDOWN_EVENT = {
    key: 'ArrowRight',
    code: 'ArrowRight',
    keyCode: keyCodes.RIGHT,
    charCode: keyCodes.RIGHT,
};

const LEFT_KEYDOWN_EVENT = {
    key: 'ArrowLeft',
    code: 'ArrowLeft',
    keyCode: keyCodes.LEFT,
    charCode: keyCodes.LEFT,
};

describe('Tabs', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should render the correct tab roles', () => {
        const { getAllByRole, getByRole } = render(<TabsUi />);
        getByRole('tablist');
        const tabs = getAllByRole('tab');
        expect(tabs).toHaveLength(3);
    });

    it('should focus the correct tab on click event', () => {
        const { getAllByRole } = render(<TabsUi />);
        const [first, second, third] = getAllByRole('tab');

        fireEvent.click(first);
        expect(first).toHaveFocus();

        fireEvent.click(second);
        expect(second).toHaveFocus();

        fireEvent.click(third);
        expect(third).toHaveFocus();
    });

    it('should focus the next tab when pressing right', () => {
        const { getAllByRole } = render(<TabsUi />);
        const [first, second, third] = getAllByRole('tab');

        fireEvent.click(first);
        expect(first).toHaveFocus();

        fireEvent.keyDown(first, RIGHT_KEYDOWN_EVENT);
        expect(second).toHaveFocus();

        fireEvent.keyDown(second, RIGHT_KEYDOWN_EVENT);
        expect(third).toHaveFocus();
    });

    it('should maintain focus at the bounds of the tablist', () => {
        const { getAllByRole } = render(<TabsUi />);
        const [first, second, third] = getAllByRole('tab');

        fireEvent.click(first);
        expect(first).toHaveFocus();

        fireEvent.keyDown(first, LEFT_KEYDOWN_EVENT);
        expect(first).toHaveFocus();

        fireEvent.keyDown(first, LEFT_KEYDOWN_EVENT);
        fireEvent.keyDown(second, RIGHT_KEYDOWN_EVENT);
        fireEvent.keyDown(third, RIGHT_KEYDOWN_EVENT);
        expect(third).toHaveFocus();
    });

    it('should render the correct tab panels', () => {
        const { getAllByRole, getByText } = render(<TabsUi />);
        const [first, second, third] = getAllByRole('tab');

        expect(getByText('Tab one')).toBeVisible();
        expect(getByText('Tab two')).not.toBeVisible();
        expect(getByText('Tab three')).not.toBeVisible();

        fireEvent.click(first);
        expect(first).toHaveFocus();

        fireEvent.click(second);
        expect(second).toHaveFocus();
        expect(getByText('Tab one')).not.toBeVisible();
        expect(getByText('Tab two')).toBeVisible();
        expect(getByText('Tab three')).not.toBeVisible();

        fireEvent.click(third);
        expect(third).toHaveFocus();
        expect(getByText('Tab one')).not.toBeVisible();
        expect(getByText('Tab two')).not.toBeVisible();
        expect(getByText('Tab three')).toBeVisible();
    });

    describe('when tabs list contains arbitrary elements', () => {
        it('should render the correct tab panels', () => {
            const { getAllByRole, getByText } = render(<TabsUiArbitrary />);
            const [first, second, third] = getAllByRole('tab');

            expect(getByText('Tab one')).toBeVisible();
            expect(getByText('Tab two')).not.toBeVisible();
            expect(getByText('Tab three')).not.toBeVisible();

            fireEvent.click(first);
            expect(first).toHaveFocus();

            fireEvent.click(second);
            expect(second).toHaveFocus();
            expect(getByText('Tab one')).not.toBeVisible();
            expect(getByText('Tab two')).toBeVisible();
            expect(getByText('Tab three')).not.toBeVisible();

            fireEvent.click(third);
            expect(third).toHaveFocus();
            expect(getByText('Tab one')).not.toBeVisible();
            expect(getByText('Tab two')).not.toBeVisible();
            expect(getByText('Tab three')).toBeVisible();
        });

        it('should focus the the correct tabs on keydown', () => {
            const { getAllByRole } = render(<TabsUiArbitrary />);
            const [first, second, third] = getAllByRole('tab');

            fireEvent.click(first);
            expect(first).toHaveFocus();

            fireEvent.keyDown(first, RIGHT_KEYDOWN_EVENT);
            expect(second).toHaveFocus();

            fireEvent.keyDown(second, RIGHT_KEYDOWN_EVENT);
            expect(third).toHaveFocus();
        });
    });

    it('should have no accessibility issues', async () => {
        const { container } = render(<TabsUi />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
