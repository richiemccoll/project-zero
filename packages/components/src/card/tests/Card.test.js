import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';

import { axe } from 'jest-axe';

import Button from '../../button';
import Card from '../';

function renderCard({ title = 'title', image = 'placeholder.jpg', description = 'description', actions = null } = {}) {
    return <Card title={title} image={image} description={description} actions={actions} />;
}

describe('Card', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should have no accessibility issues', async () => {
        const { container } = render(renderCard());
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('should render title, image and description', () => {
        const { getByText, getByTestId } = render(renderCard());
        getByText('title');
        getByText('description');
        expect(getByTestId('card-image').src).toEqual('http://localhost/placeholder.jpg');
    });

    it('should render actions if they exist', () => {
        const onClickSpy = jest.fn();

        const { getByText, getByTestId } = render(
            renderCard({
                actions: (
                    <Button variant="light" onClick={onClickSpy}>
                        Action
                    </Button>
                ),
            }),
        );
        getByText('title');
        getByText('description');
        expect(getByTestId('card-image').src).toEqual('http://localhost/placeholder.jpg');
        const element = getByText('Action');
        fireEvent.click(element.parentElement);
        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
});
