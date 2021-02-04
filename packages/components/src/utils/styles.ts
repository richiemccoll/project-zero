import styled, { AnyStyledComponent } from 'styled-components';

export function useFocusRing(): string {
    const FOCUS_RING_COLOR = 'rgba(21, 156, 228, 0.4)';
    return `
    &:focus {
        outline: 0;
        box-shadow: 0 0 0 4px ${FOCUS_RING_COLOR};
    }
    `;
}

export function useFadedTruncation(Component: AnyStyledComponent): AnyStyledComponent {
    const LIGHT_GRADIENT = 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%)';
    return styled(Component)`
        position: relative;
        height: 3.5em; /* exactly three lines */
        overflow: hidden;

        &:after {
            content: '';
            text-align: right;
            position: absolute;
            bottom: 0;
            right: 0;
            width: 40%;
            height: 1.2em;
            background: ${LIGHT_GRADIENT};
        }
    `;
}
