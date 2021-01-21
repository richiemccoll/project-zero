import styled from 'styled-components';
import { typography } from 'styled-system';

function getFontSize({ theme, variant }) {
    return theme.fontSizes.text[variant];
}

const Text = styled.span`
    font-size: ${getFontSize}rem;
    ${typography};
`;

Text.defaultProps = {
    variant: 'regular',
};

export default Text;
