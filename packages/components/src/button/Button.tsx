import React, { Children, ReactElement, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { space, border } from 'styled-system';

import Text from '../text/';
import Box from '../box/';
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

const VALID_ELEMENT_TYPES = ['button', 'a'];
const SPACING_SIZES = {
    REGULAR: [4, 3],
    CIRCULAR: [3, 3],
};

export type ButtonProps = {
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
    circular?: boolean;
    theme: Theme;
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

const StyledButton = styled(Box)`
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

export default function Button({
    children,
    as = 'button',
    onClick = null,
    circular,
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
        <StyledButton
            as={elementType}
            px={px}
            py={py}
            border={0}
            borderRadius={borderRadius}
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
