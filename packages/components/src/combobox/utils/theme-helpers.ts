import { Theme } from 'default-theme';

type IComboBoxUtils = {
    theme: Theme;
    isFocused?: boolean;
};

export function getBorder({ theme, isFocused }: IComboBoxUtils): string {
    return isFocused ? `1px solid ${theme.colors.primary.default}` : `1px solid ${theme.colors.dark.default}`;
}

export function getFontSize({ theme }: IComboBoxUtils): string {
    return `${theme.textFontSizes.medium}rem`;
}

export function getDefaultLightGrey({ theme }: IComboBoxUtils): string {
    return theme.colors.grey.light.default;
}

export function getDefaultDarkGrey({ theme }: IComboBoxUtils): string {
    return theme.colors.dark.default;
}

export function getLightActiveGrey({ theme }: IComboBoxUtils): string {
    return theme.colors.grey.light.active;
}

export function getFocusedBorder({ theme }: IComboBoxUtils): string {
    return `1px solid ${theme.colors.primary.default}`;
}

export function getFocusedBoxShadow({ theme }: IComboBoxUtils): string {
    return `0 0 4px ${theme.colors.primary.default}`;
}

export function getButtonBoxShadow({ theme, isFocused }: IComboBoxUtils): string {
    return isFocused ? `0 0 3px ${theme.colors.primary.default}` : 'none';
}
