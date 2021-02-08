import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import Button from '../button';

import {
    getFontSize,
    getBorder,
    getDefaultLightGrey,
    getDefaultDarkGrey,
    getLightActiveGrey,
    getFocusedBorder,
    getFocusedBoxShadow,
    getButtonBoxShadow,
} from './utils/theme-helpers';

const Input = styled.input<SpaceProps>`
    background-color: ${getDefaultLightGrey};
    font-size: ${getFontSize};
    border: ${getBorder};
    min-width: 30ch;
    border-radius: 5px;
    color: ${getDefaultDarkGrey};
    transition: all 150ms;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${getDefaultDarkGrey};
    }
    :-ms-input-placeholder {
        color: ${getDefaultDarkGrey};
    }
    &:focus,
    &:active,
    &:hover {
        background-color: ${getLightActiveGrey};
    }

    &:active,
    &:focus {
        outline: 0;
        border: ${getFocusedBorder};
        box-shadow: ${getFocusedBoxShadow};
    }

    ${space};
`;

const ComboBoxButton = styled(Button)`
    margin-left: -1em;
    border: ${getBorder};
    border-radius: 0 5px 5px 0;
    transition: all 200ms;
    color: ${({ isFocused, theme }) => (isFocused ? theme.colors.primary.default : 'inherit')};
    fill: ${({ isFocused, theme }) => (isFocused ? theme.colors.primary.default : 'inherit')};
    box-shadow: ${getButtonBoxShadow};

    &:focus {
        outline: 0;
        box-shadow: ${getButtonBoxShadow};
    }
`;

const ComboxBoxOptions = styled.ul<SpaceProps>`
    background-color: ${getDefaultLightGrey};
    list-style: none;
    margin: 0;
    padding: 0;
    border: 1px solid ${getDefaultDarkGrey};
    max-width: calc(30ch + 2.5em);
    border-radius: 5px;
    ${space};
`;

const ComboBoxListItem = styled.li<SpaceProps>`
    background-color: ${getDefaultLightGrey};
    font-size: ${getFontSize};
    cursor: pointer;
    border-radius: 5px;
    &:active,
    &:hover {
        background-color: ${getLightActiveGrey};
    }
    ${space};
`;

export { Input, ComboBoxButton, ComboxBoxOptions, ComboBoxListItem };
