import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

const OrderedList = styled.ol`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li<SpaceProps>`
    display: inline;
    ${space};

    &::after {
        padding-right: 0.5em;
        padding-left: 0.5em;
        content: '/';
    }

    &:last-child {
        &::after {
            content: none;
        }
    }
`;

export { OrderedList, ListItem };
