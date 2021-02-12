import React from 'react';
import { ThemeContext } from 'styled-components';

import Box from '../box';

type AlertProps = {
    active?: boolean;
    type: 'info' | 'success' | 'error';
    children: React.ReactNode;
};

Alert.defaultProps = {
    type: 'info',
};

const alertRoles = {
    assertive: 'alert',
    polite: 'status',
};

const liveTypes = {
    info: 'polite',
    success: 'polite',
    error: 'assertive',
};

/**
 * An alert displays a brief, important message.
 * It does this in a way that attracts the user's attention without interrupting their task.
 * See: https://www.w3.org/TR/wai-aria-practices-1.1/#alert
 */
export default function Alert({ active, type, children }: AlertProps): React.ReactElement {
    const { colors } = React.useContext(ThemeContext);
    const liveType = liveTypes[type];
    const role = alertRoles[liveType];
    return (
        <Box
            role={role}
            p={2}
            borderWidth={2}
            borderStyle="solid"
            borderColor={colors.alerts[type]}
            opacity={active ? '1' : '0'}
            borderRadius={5}
            {...(active && { 'aria-live': liveType })}
        >
            {active ? children : null}
        </Box>
    );
}
