import { ButtonProps } from '../Button';

const BORDER_RADIUS_SIZES = {
    REGULAR: 6,
    ROUNDED: 18,
    CIRCULAR: '50%',
};

function getColor({ theme, variant }: ButtonProps): string {
    return theme.buttons[variant].color;
}

function getDisabledColor({ theme, variant }: ButtonProps): string {
    return theme.buttons[variant].color.disabled;
}

function getBackgroundColor({ theme, variant }: ButtonProps): string {
    return theme.buttons[variant].backgroundColor;
}

function getActiveBackgroundColor({ theme, variant }: ButtonProps): string {
    return theme.buttons[variant].active;
}

function getDisabledBackgroundColor({ theme, variant }: ButtonProps): string {
    return theme.buttons[variant].disabled;
}

function getBorderRadius({ circular, rounded }: { circular: boolean; rounded: boolean }): number | string {
    if (circular) {
        return BORDER_RADIUS_SIZES.CIRCULAR;
    }
    if (rounded) {
        return BORDER_RADIUS_SIZES.ROUNDED;
    }
    return BORDER_RADIUS_SIZES.REGULAR;
}

export {
    getColor,
    getDisabledColor,
    getBackgroundColor,
    getActiveBackgroundColor,
    getDisabledBackgroundColor,
    getBorderRadius,
};
