import styled from 'styled-components';
import { typography, TypographyProps } from 'styled-system';

import DEFAULT_THEME, { Theme } from '../../default-theme';

type TextProps = {
    variant?: string;
    theme: Theme;
    children?: React.ReactNode;
};

type ComposedProps = TypographyProps & TextProps;

function getFontSize({ theme, variant }) {
    return theme.textFontSizes[variant];
}

const Text = styled.p<ComposedProps>`
    font-size: ${getFontSize}rem;
    ${typography};
`;

Text.defaultProps = {
    variant: 'medium',
    theme: DEFAULT_THEME,
};

export default Text;
