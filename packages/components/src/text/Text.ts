import styled from 'styled-components';
import { typography } from 'styled-system';

import DEFAULT_THEME from '../../default-theme';

function getFontSize({ theme, variant }) {
    return theme.fontSizes.text[variant];
}

const Text = styled.span`
    font-size: ${getFontSize}rem;
    ${typography};
`;

Text.defaultProps = {
    variant: 'medium',
    theme: DEFAULT_THEME,
};

export default Text;
