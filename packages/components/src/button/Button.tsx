import React, { Children, ReactElement, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { space, border, SpaceProps, BorderProps } from 'styled-system';

import Text from '../text/';
import { useFocusRing } from '../utils/styles';

import DEFAULT_THEME, { Theme } from '../../default-theme';

import {
    getColor,
    getBackgroundColor,
    getActiveBackgroundColor,
    getDisabledColor,
    getBorderRadius,
    getDisabledBackgroundColor,
} from './utils/theme-helpers';

const SPACING_SIZES = {
    SMALL: [2, 2],
    REGULAR: [4, 3],
    CIRCULAR: [3, 3],
};

export type ButtonProps = {
    children?: React.ReactNode;
    variant?: string;
    onClick?: (arg: SyntheticEvent) => void;
    onPress?: (arg: SyntheticEvent) => void;
    disabled?: boolean;
    rounded?: boolean;
    circular?: boolean;
    theme: Theme;
};

type ComposedProps = ButtonProps & SpaceProps & BorderProps;

const StyledButton = styled.button<ComposedProps>`
    display: inline-block;
    color: ${getColor};
    background-color: ${getBackgroundColor};
    transition: background-color box-shadow 200ms;

    &:focus,
    &:hover,
    &:active {
        background-color: ${getActiveBackgroundColor};
    }

    ${useFocusRing}

    &:disabled {
        background-color: ${getDisabledBackgroundColor};
        color: ${getDisabledColor};
    }

    ${space}
    ${border}
`;

export default function Button({ children, onClick = null, circular, rounded, ...props }: ButtonProps): ReactElement {
    const childElements = Children.map(children, (child) => {
        if (typeof child === 'string') {
            return <Text as="span">{child}</Text>;
        }
        return child;
    });
    const borderRadius = getBorderRadius({ circular, rounded });
    const [px, py] = circular ? SPACING_SIZES.CIRCULAR : SPACING_SIZES.REGULAR;

    function handleOnClick(event: SyntheticEvent) {
        if (props.disabled) {
            return;
        }
        if (onClick) {
            onClick(event);
        }
    }
    return (
        <StyledButton px={px} py={py} border={0} borderRadius={borderRadius} onClick={handleOnClick} {...props}>
            {childElements}
        </StyledButton>
    );
}

Button.defaultProps = {
    as: 'button',
    theme: DEFAULT_THEME,
    variant: 'primary',
};
