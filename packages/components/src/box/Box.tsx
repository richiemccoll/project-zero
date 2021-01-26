import React from 'react';
import styled from 'styled-components';
import { space, color, layout, flexbox, border } from 'styled-system';

import DEFAULT_THEME, { Theme } from '../../default-theme';

/**
 * Everything in web design is a box, or the absence of a box.
 */
const StyledBox = styled.div`
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

type BoxProps = {
    invert?: boolean;
    children: React.ReactNode;
    theme: Theme;
    bg?: string;
    color?: string;
};

export default function Box({ invert, children, theme, ...props }: BoxProps): React.ReactElement {
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
        <StyledBox {...props} bg={bg} color={color}>
            {children}
        </StyledBox>
    );
}

Box.defaultProps = {
    invert: false,
    theme: DEFAULT_THEME,
};
