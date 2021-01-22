import React, { Children, ReactElement, SyntheticEvent } from 'react';
import styled from 'styled-components';

import Text from '../text/';
import Box from '../box/';

import DEFAULT_THEME from '../../default-theme';

const VALID_ELEMENT_TYPES = ['button', 'a'];

type ButtonProps = {
    children: React.ReactNode;
    as?: string;
    variant?: string;
    onClick?: (arg: SyntheticEvent) => void;
    onPress?: (arg: SyntheticEvent) => void;
    disabled?: boolean;
    href?: string;
    role?: string;
    target?: string;
    rel?: string;
    rounded?: boolean;
};

function getElementProps(type: string, props: ButtonProps): ButtonProps {
    if (type !== 'button') {
        return {
            role: 'button',
            href: props.href,
            target: props.target ? props.target : undefined,
            rel: props.rel ? props.rel : undefined,
            ...props,
        };
    }
    return {
        ...props,
    };
}

function getColor({ theme, variant }) {
    return theme.buttons[variant].color.default;
}

function getDisabledColor({ theme, variant }) {
    return theme.buttons[variant].color.disabled;
}

function getBackgroundColor({ theme, variant }) {
    return theme.buttons[variant].backgroundColor;
}

function getActiveBackgroundColor({ theme, variant }) {
    return theme.buttons[variant].active;
}

function getDisabledBackgroundColor({ theme, variant }) {
    return theme.buttons[variant].disabled;
}

const StyledButton = styled(Box)`
    color: ${getColor};
    background-color: ${getBackgroundColor};
    transition: background-color 200ms;

    &:hover,
    &:active {
        background-color: ${getActiveBackgroundColor};
    }

    &:disabled {
        background-color: ${getDisabledBackgroundColor};
        color: ${getDisabledColor};
    }
`;

export default function Button({
    children,
    as = 'button',
    onClick = null,
    rounded,
    ...props
}: ButtonProps): ReactElement {
    const elementType = VALID_ELEMENT_TYPES.includes(as) ? as : 'button';
    const childElements = Children.map(children, (child) => {
        if (typeof child === 'string') {
            return <Text as="span">{child}</Text>;
        }
        return child;
    });
    const elementProps = getElementProps(elementType, props as ButtonProps);
    function handleOnClick(event: SyntheticEvent) {
        if (props.disabled) {
            return;
        }
        if (onClick) {
            onClick(event);
        }
    }
    return (
        <StyledButton
            as={elementType}
            px={4}
            py={3}
            border={0}
            borderRadius={rounded ? 50 : 4}
            onClick={handleOnClick}
            {...elementProps}
        >
            {childElements}
        </StyledButton>
    );
}

Button.defaultProps = {
    as: 'button',
    theme: DEFAULT_THEME,
    variant: 'primary',
};