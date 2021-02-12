import React from 'react';
import { fireEvent, cleanup } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';
import { axe } from 'jest-axe';

import ButtonComponent from '../';

describe('Button', () => {
    afterEach(async () => {
        await cleanup();
    });
    it('should wrap children in span by default', () => {
        const { getByText } = render(<ButtonComponent>Default</ButtonComponent>);
        const child = getByText('Default');
        expect(child.nodeName).toEqual('SPAN');
    });

    it('should render React elements as children ', () => {
        const { getByText } = render(
            <ButtonComponent>
                Default <i>Icon</i>
            </ButtonComponent>,
        );
        const child = getByText('Default');
        expect(child.nodeName).toEqual('SPAN');

        const icon = getByText('Icon');
        expect(icon.nodeName).toEqual('I');
    });

    it('should handle onClick events', () => {
        const onClickSpy = jest.fn();
        const { getByText } = render(<ButtonComponent onClick={onClickSpy}>Default</ButtonComponent>);
        const element = getByText('Default');
        const button = element.parentElement;
        fireEvent.click(button);
        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });

    it('should support the disabled attribute', () => {
        const spy = jest.fn();
        const { getByText } = render(
            <ButtonComponent onClick={spy} disabled>
                Default
            </ButtonComponent>,
        );
        const element = getByText('Default');
        const button = element.parentElement;
        fireEvent.click(button);
        expect(button.disabled).toEqual(true);
        expect(spy).toHaveBeenCalledTimes(0);
    });

    it('should have no accessibility issues', async () => {
        const { container } = render(<ButtonComponent>Default</ButtonComponent>);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
