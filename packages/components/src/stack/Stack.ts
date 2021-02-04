import styled from 'styled-components';

import Theme, { Theme as ThemeType } from '../../default-theme';

type StackProps = {
    variant?: string;
    theme: ThemeType;
};

function getVerticalSpacing({ theme, variant }) {
    return theme.verticalSpacing[variant];
}

const Stack = styled.div<StackProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > * {
        margin-top: 0;
        margin-bottom: 0;
    }

    > * + * {
        margin-top: ${getVerticalSpacing}rem !important;
    }
`;

Stack.defaultProps = {
    variant: 'regular',
    theme: Theme,
};

export default Stack;
