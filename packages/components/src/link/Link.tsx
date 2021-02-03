import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import DEFAULT_THEME, { Theme } from '../../default-theme';
import { useFocusRing } from '../utils/styles';

type LinkProps = {
    id?: string;
    variant?: string;
    inline?: boolean;
    href?: string;
    role?: string;
    target?: string;
    rel?: string;
    theme?: Theme;
    children: React.ReactNode;
    onPress?: (arg: SyntheticEvent) => void;
    onKeyDown?: (arg: SyntheticEvent) => void;
    tabIndex?: number;
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

const Link = React.forwardRef(
    (
        { id, children, href, role, target, rel, variant = 'primary', inline, onPress, tabIndex, ...props }: LinkProps,
        ref: React.MutableRefObject<HTMLAnchorElement>,
    ) => {
        function handleOnPress(event: SyntheticEvent) {
            onPress(event);
        }
        return (
            <StyledLink
                ref={ref}
                id={id}
                px={1}
                py={1}
                href={href}
                role={role}
                target={target}
                rel={rel}
                variant={variant}
                inline={inline}
                onClick={handleOnPress}
                tabIndex={tabIndex ? tabIndex : null}
                {...props}
            >
                {children}
            </StyledLink>
        );
    },
);

Link.displayName = 'Link';

Link.defaultProps = {
    variant: 'primary',
    theme: DEFAULT_THEME,
    onPress: () => {},
};

export default Link;
