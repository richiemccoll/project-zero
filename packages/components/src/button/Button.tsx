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
    getSize,
} from './utils/theme-helpers';

export type ButtonProps = {
    children?: React.ReactNode;
    variant?: string;
    onClick?: (arg: SyntheticEvent) => void;
    onPress?: (arg: SyntheticEvent) => void;
    disabled?: boolean;
    rounded?: boolean;
    circular?: boolean;
    size?: string;
    isFocused?: boolean;
    theme: Theme;
};

export type ComposedButtonProps = ButtonProps & SpaceProps & BorderProps & React.HTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<ComposedButtonProps>`
    display: inline-block;
    color: ${getColor};
    background-color: ${getBackgroundColor};
    transition: background-color, box-shadow 200ms;

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

export default function Button({
    children,
    onClick = null,
    circular,
    rounded,
    size,
    ...props
}: ButtonProps): ReactElement {
    const childElements = Children.map(children, (child) => {
        if (typeof child === 'string') {
            return <Text as="span">{child}</Text>;
        }
        return child;
    });
    const borderRadius = getBorderRadius({ circular, rounded });
    const [px, py] = getSize({ circular, size });

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
    size: 'regular',
};
