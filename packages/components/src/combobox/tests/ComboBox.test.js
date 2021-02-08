import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';

import { axe } from 'jest-axe';

import ComboBox from '../';

describe('ComboBox', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should have no accessibility issues', async () => {
        const { container } = render(
            <ComboBox.Input id="test" label="test" placeholder="Please enter some text...">
                <ComboBox.Item>A</ComboBox.Item>
                <ComboBox.Item>B</ComboBox.Item>
                <ComboBox.Item>C</ComboBox.Item>
            </ComboBox.Input>,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('should render a label, input and button with correct roles', () => {
        const { getByLabelText, getByRole } = render(
            <ComboBox.Input id="test" label="test" placeholder="Please enter some text...">
                <ComboBox.Item>A</ComboBox.Item>
                <ComboBox.Item>B</ComboBox.Item>
                <ComboBox.Item>C</ComboBox.Item>
            </ComboBox.Input>,
        );

        const combobox = getByRole('combobox');
        expect(combobox).toHaveAttribute('placeholder', 'Please enter some text...');
        expect(combobox).toHaveAttribute('aria-expanded', 'false');
        getByLabelText('test');
    });

    it('should render the combobox items when clicking the show button is pressed', () => {
        const { getByRole, getAllByRole, queryByRole } = render(
            <ComboBox.Input id="test" label="test" placeholder="Please enter some text...">
                <ComboBox.Item>A</ComboBox.Item>
                <ComboBox.Item>B</ComboBox.Item>
                <ComboBox.Item>C</ComboBox.Item>
            </ComboBox.Input>,
        );
        const button = getByRole('button');
        fireEvent.click(button);
        expect(getAllByRole('option').length).toEqual(3);

        fireEvent.click(button);
        expect(queryByRole('option')).not.toBeInTheDocument();
    });

    it('should update the value of the input when selecting a combobox option', () => {
        const { getByRole, getAllByRole } = render(
            <ComboBox.Input id="test" label="test" placeholder="Please enter some text...">
                <ComboBox.Item>A</ComboBox.Item>
                <ComboBox.Item>B</ComboBox.Item>
                <ComboBox.Item>C</ComboBox.Item>
            </ComboBox.Input>,
        );
        const button = getByRole('button');
        const combobox = getByRole('combobox');
        fireEvent.click(button);

        const options = getAllByRole('option');
        expect(options.length).toEqual(3);

        const [firstOption] = options;
        fireEvent.click(firstOption);

        expect(combobox.value).toEqual('B');
    });
});
