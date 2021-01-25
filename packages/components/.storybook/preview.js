import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import DEFAULT_THEME from '../default-theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${DEFAULT_THEME.fontFamily};
  }
`;

export const decorators = [
    (Story) => (
        <ThemeProvider theme={DEFAULT_THEME}>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    ),
];
