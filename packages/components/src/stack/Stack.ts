import styled from 'styled-components';

import Box from '../box/';
import Theme from '../../default-theme';

function getVerticalSpacing({ theme, variant }) {
    return theme.verticalSpacing[variant];
}

const Stack = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > * {
        margin-top: 0;
        margin-bottom: 0;
    }

    > * + * {
        margin-top: ${getVerticalSpacing}rem;
    }
`;

Stack.defaultProps = {
    variant: 'regular',
    theme: Theme,
};

export default Stack;
