import styled from 'styled-components';
import { typography } from 'styled-system';
import DEFAULT_THEME, { Theme } from '../../default-theme';

type HeadingProps = {
    variant?: string;
    theme?: Theme;
    children?: React.ReactNode;
};

function getSize({ theme, variant }) {
    return theme.headingFontSizes[variant];
}

const Heading = styled.h2<HeadingProps>`
    ${typography};
    font-weight: bold;
    font-size: ${getSize}rem;
    margin: 0;
`;

Heading.defaultProps = {
    variant: 'medium',
    theme: DEFAULT_THEME,
};

export default Heading;
