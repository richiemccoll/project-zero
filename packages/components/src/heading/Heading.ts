import styled from 'styled-components';
import { typography } from 'styled-system';

function getSize({ theme, variant }) {
    return theme.fontSizes.heading[variant];
}

const Heading = styled.h2`
    ${typography};
    font-weight: bold;
    font-size: ${getSize}rem;
    margin: 0;
`;

Heading.defaultProps = {
    variant: 'medium',
};

export default Heading;
