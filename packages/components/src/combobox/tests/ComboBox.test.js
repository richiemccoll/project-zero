import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';

import { axe } from 'jest-axe';

import ComboBox from '../';

const DEFAULT_OPTIONS = ['A', 'B', 'C'];
const DEFAULT_PROPS = {
    options: DEFAULT_OPTIONS,
    id: 'test',
    label: 'test',
    placeholder: 'Please enter some text...',
};

const ESCAPE_KEY_EVENT = { key: 'Escape', code: 'Escape', keyCode: 27, charCode: 27 };
const DOWN_KEY_EVENT = { key: 'Down', code: 'Down', keyCode: 40, charCode: 40 };
const UP_KEY_EVENT = { key: 'Up', code: 'Up', keyCode: 38, charCode: 38 };
const ENTER_KEY_EVENT = { key: 'Enter', code: 'Enter', keyCode: 13, charcode: 13 };

describe('ComboBox', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should have no accessibility issues', async () => {
        const { container } = render(<ComboBox {...DEFAULT_PROPS} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('should render a combobox with correct roles', () => {
        const { getByRole } = render(<ComboBox {...DEFAULT_PROPS} />);

        const combobox = getByRole('combobox');
        expect(combobox).toHaveAttribute('placeholder', 'Please enter some text...');
        expect(combobox).toHaveAttribute('aria-expanded', 'false');
        expect(combobox).toHaveAttribute('aria-haspopup', 'true');
        expect(combobox).toHaveAttribute('aria-controls', 'test-options');
    });

    describe('When autocomplete is set to none', () => {
        it('should render the combobox items when clicking the show button is pressed', () => {
            const { getByRole, getAllByRole, queryByRole } = render(<ComboBox {...DEFAULT_PROPS} />);
            const button = getByRole('button');
            fireEvent.click(button);
            expect(getAllByRole('option').length).toEqual(3);

            fireEvent.click(button);
            expect(queryByRole('option')).not.toBeInTheDocument();
        });

        it('should not render the combobox options on show button click if no options available', () => {
            const { getByRole, queryByRole } = render(<ComboBox {...DEFAULT_PROPS} options={[]} />);
            const button = getByRole('button');
            fireEvent.click(button);
            expect(queryByRole('option')).not.toBeInTheDocument();
        });

        it('should update the value of the input when selecting a combobox option', () => {
            const { getByRole, getAllByRole, queryByRole } = render(<ComboBox {...DEFAULT_PROPS} />);
            const button = getByRole('button');
            const combobox = getByRole('combobox');
            fireEvent.click(button);

            const options = getAllByRole('option');
            expect(options.length).toEqual(3);

            const [firstOption] = options;
            fireEvent.click(firstOption);

            expect(combobox.value).toEqual('A');
            expect(queryByRole('option')).not.toBeInTheDocument();
        });

        it('should clear any selection when pressing the ESC key when focus is on input', () => {
            const { getByRole, getAllByRole, queryByRole } = render(<ComboBox {...DEFAULT_PROPS} />);
            const button = getByRole('button');
            const combobox = getByRole('combobox');
            fireEvent.click(button);

            const options = getAllByRole('option');
            expect(options.length).toEqual(3);

            const [firstOption] = options;
            fireEvent.click(firstOption);

            expect(combobox.value).toEqual('A');

            fireEvent.keyDown(combobox, ESCAPE_KEY_EVENT);

            expect(combobox.value).toEqual('');
            expect(queryByRole('option')).not.toBeInTheDocument();
        });

        it('should clear any selection when pressing the ESC key when focus is on options', () => {
            const { getByRole, queryByRole, getAllByRole } = render(<ComboBox {...DEFAULT_PROPS} />);
            const combobox = getByRole('combobox');
            fireEvent.change(combobox, { target: { value: 'a' } });

            expect(combobox.value).toEqual('a');
            const options = getAllByRole('option');
            expect(options.length).toEqual(3);

            fireEvent.keyDown(combobox, DOWN_KEY_EVENT);
            const [firstOption] = options;
            expect(firstOption).toHaveFocus();

            fireEvent.keyDown(combobox, ESCAPE_KEY_EVENT);

            expect(combobox.value).toEqual('');
            expect(queryByRole('option')).not.toBeInTheDocument();
        });

        it('should show the options when entering text in the input', () => {
            const { getByRole, getAllByRole } = render(<ComboBox {...DEFAULT_PROPS} />);
            const combobox = getByRole('combobox');
            fireEvent.change(combobox, { target: { value: 'a' } });
            expect(combobox.value).toEqual('a');
            const options = getAllByRole('option');
            expect(options.length).toEqual(3);
        });

        it('should focus the first option when pressing the DOWN key from the input', () => {
            const { getByRole, getAllByRole } = render(<ComboBox {...DEFAULT_PROPS} />);
            const combobox = getByRole('combobox');
            fireEvent.change(combobox, { target: { value: 'a' } });
            expect(combobox.value).toEqual('a');
            const options = getAllByRole('option');
            expect(options.length).toEqual(3);
            fireEvent.keyDown(combobox, DOWN_KEY_EVENT);
            const [firstOption] = options;
            expect(firstOption).toHaveFocus();
        });

        it('should allow navigation between options via DOWN and UP keys', () => {
            const { getByRole, getAllByRole } = render(<ComboBox {...DEFAULT_PROPS} />);
            const combobox = getByRole('combobox');
            fireEvent.change(combobox, { target: { value: 'a' } });
            expect(combobox.value).toEqual('a');
            const options = getAllByRole('option');
            const optionsListbox = getByRole('listbox');
            expect(options.length).toEqual(3);

            fireEvent.keyDown(combobox, DOWN_KEY_EVENT);

            const [first, second, third] = options;
            expect(first).toHaveFocus();

            fireEvent.keyDown(optionsListbox, DOWN_KEY_EVENT);
            expect(second).toHaveFocus();

            fireEvent.keyDown(optionsListbox, DOWN_KEY_EVENT);
            expect(third).toHaveFocus();

            fireEvent.keyDown(optionsListbox, UP_KEY_EVENT);
            expect(second).toHaveFocus();

            fireEvent.keyDown(optionsListbox, UP_KEY_EVENT);
            expect(first).toHaveFocus();

            // This is the wrap around behaviour - first to last -> last to first
            fireEvent.keyDown(optionsListbox, UP_KEY_EVENT);
            expect(third).toHaveFocus();
            fireEvent.keyDown(optionsListbox, DOWN_KEY_EVENT);
            expect(first).toHaveFocus();
        });

        it('should update the value of the input when selecting a combobox option via ENTER key', () => {
            const { getByRole, getAllByRole, queryByRole } = render(<ComboBox {...DEFAULT_PROPS} />);
            const combobox = getByRole('combobox');

            fireEvent.change(combobox, { target: { value: 'a' } });
            expect(combobox.value).toEqual('a');

            const options = getAllByRole('option');
            const optionsListbox = getByRole('listbox');
            expect(options.length).toEqual(3);

            fireEvent.keyDown(combobox, DOWN_KEY_EVENT);

            const [first] = options;
            expect(first).toHaveFocus();

            fireEvent.keyDown(optionsListbox, ENTER_KEY_EVENT);
            expect(combobox.value).toEqual('A');
            expect(combobox).toHaveFocus();
            expect(queryByRole('option')).not.toBeInTheDocument();
        });
    });
});
