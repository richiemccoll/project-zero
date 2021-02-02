import React, { RefObject } from 'react';
import styled from 'styled-components';
import { space, color, layout, flexbox, border } from 'styled-system';

import DEFAULT_THEME, { Theme } from '../../default-theme';

type BoxProps = {
    invert?: boolean;
    children: React.ReactNode;
    theme?: Theme;
    bg?: string;
    color?: string;
    as?: never;
    id?: string;
    hidden?: boolean;
    role?: string;
};

/**
 * Everything in web design is a box, or the absence of a box.
 */
const StyledBox = styled.div<BoxProps>`
    box-sizing: border-box;
    min-width: 0;
    ${space}
    ${color}
    ${layout}
    ${flexbox}
    ${border}

    * {
        color: inherit;
    }

    // Ensure that the box outline stays consistent
    // even with high contrast themes.
    outline: 0.12rem solid transparent;
    outline-offset: -0.12em;
`;

const Box = React.forwardRef(({ invert, children, theme, ...props }: BoxProps, ref: RefObject<HTMLDivElement>) => {
    const colors = {
        dark: {
            bg: theme.colors.dark.default,
            color: theme.colors.text.light.default,
        },
        default: {
            bg: props.bg,
            color: props.color,
        },
    };
    const { bg, color } = invert ? colors.dark : colors.default;
    return (
        <StyledBox bg={bg} color={color} ref={ref} {...props}>
            {children}
        </StyledBox>
    );
});

Box.displayName = 'Box';

Box.defaultProps = {
    invert: false,
    theme: DEFAULT_THEME,
};

export default Box;
