import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import DEFAULT_THEME, { Theme } from '../../default-theme';
import { useFocusRing } from '../utils/styles';

type LinkProps = {
    variant?: string;
    inline?: boolean;
    href?: string;
    role?: string;
    target?: string;
    rel?: string;
    theme: Theme;
    children: React.ReactNode;
    onPress?: (arg: SyntheticEvent) => void;
};

function getColor({ theme, variant }) {
    return theme.links[variant].color;
}

function getTextDecoration({ inline }) {
    return inline ? 'underline' : 'none';
}

const StyledLink = styled.a`
    color: ${getColor};
    font-weight: bold;
    transition: all 200ms;
    text-decoration: ${getTextDecoration};

    &:active,
    &:hover {
        cursor: pointer;
    }

    ${useFocusRing};
    ${space};
`;

export default function Link({
    children,
    href,
    role,
    target,
    rel,
    variant,
    inline,
    onPress,
}: LinkProps): React.ReactElement {
    function handleOnPress(event: SyntheticEvent) {
        onPress(event);
    }
    return (
        <StyledLink
            px={1}
            py={1}
            href={href}
            role={role}
            target={target}
            rel={rel}
            variant={variant}
            inline={inline}
            onClick={handleOnPress}
        >
            {children}
        </StyledLink>
    );
}

Link.defaultProps = {
    variant: 'primary',
    theme: DEFAULT_THEME,
};
