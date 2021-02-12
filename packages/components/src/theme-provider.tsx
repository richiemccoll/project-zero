import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import DEFAULT_THEME, { Theme } from '../default-theme';

export type ThemeProviderProps = {
    theme: Theme;
    children: React.ReactNode;
};

export default function ThemeProvider({ theme = DEFAULT_THEME, children }: ThemeProviderProps): React.ReactElement {
    return <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>;
}
