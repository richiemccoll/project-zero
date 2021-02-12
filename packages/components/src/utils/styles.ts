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

export function useFadedTruncation(Component: AnyStyledComponent, clamp = 3): AnyStyledComponent {
    return styled(Component)`
        display: -webkit-box;
        -webkit-line-clamp: ${clamp};
        -webkit-box-orient: vertical;
        overflow: hidden;
    `;
}
