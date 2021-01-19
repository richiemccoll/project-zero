import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import ButtonComponent from '../';

describe('Button', () => {
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

    it('should support <a> element type', () => {
        const { getByText } = render(<ButtonComponent as="a">Default</ButtonComponent>);
        const element = getByText('Default');
        expect(element.parentElement.nodeName).toEqual('A');
    });

    it('should default to the button element type', () => {
        const { getByText } = render(<ButtonComponent as="div">Default</ButtonComponent>);
        const element = getByText('Default');
        expect(element.parentElement.nodeName).toEqual('BUTTON');
    });

    it('should have the correct attributes if element type is <a>', () => {
        const { getByText, getAllByRole } = render(
            <React.Fragment>
                <ButtonComponent as="a" href="href">
                    Default
                </ButtonComponent>
                <ButtonComponent as="a" href="href" target="target" rel="rel">
                    Second
                </ButtonComponent>
            </React.Fragment>,
        );
        const first = getByText('Default');
        const second = getByText('Second');
        const firstLink = first.parentElement;
        const secondLink = second.parentElement;
        expect(firstLink.nodeName).toEqual('A');
        expect(secondLink.nodeName).toEqual('A');
        expect(firstLink.href).toEqual('http://localhost/href');
        expect(secondLink.href).toEqual('http://localhost/href');
        expect(secondLink.target).toEqual('target');
        expect(secondLink.rel).toEqual('rel');
        expect(getAllByRole('button')).toEqual([firstLink, secondLink]);
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
});
