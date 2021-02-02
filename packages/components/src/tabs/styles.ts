import styled from 'styled-components';
import Flex from '../flex/';

export const TabsListWrapper = styled(Flex)`
    list-style: none;
`;
function getActiveStyles({ isActive, theme }) {
    return isActive ? `2px solid ${theme.colors.dark.default}` : 'none';
}

export const TabsWrapper = styled.li`
    border-bottom: ${getActiveStyles};
`;
