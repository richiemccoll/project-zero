import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import defaultTheme from '../default-theme';

export function renderWithTheme(node: React.ReactNode, theme = defaultTheme): React.ReactNode {
    return render(<ThemeProvider theme={theme}>{node}</ThemeProvider>);
}
