import React from 'react';
import Link from '../link';
import styled from 'styled-components';

type SkipLinkProps = {
    href?: string;
    id?: string;
    children: React.ReactNode;
};

const StyledSkipLink = styled(Link)<SkipLinkProps>`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    position: absolute;

    &:focus {
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 1;
        width: auto;
        height: auto;
        clip: auto;
    }
`;

export default function SkipLink({ children, id }: SkipLinkProps): React.ReactElement {
    const href = id.includes('#') ? id : `#${id}`;
    return (
        <StyledSkipLink href={href} variant="secondary">
            {children}
        </StyledSkipLink>
    );
}
