export function useFocusRing(): string {
    const FOCUS_RING_COLOR = 'rgba(21, 156, 228, 0.4)';
    return `
    &:focus {
        outline: 0;
        box-shadow: 0 0 0 4px ${FOCUS_RING_COLOR};
    }
    `;
}
