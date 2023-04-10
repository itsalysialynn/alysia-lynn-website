import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import darkTheme from '../ui/themes/darkTheme';
import lightTheme from '../ui/themes/lightTheme';

const renderWithProviders = (
  component: ReactElement,
  theme?: typeof darkTheme | typeof lightTheme,
) => render(<ThemeProvider theme={theme || lightTheme}>{component}</ThemeProvider>);

export default renderWithProviders;
