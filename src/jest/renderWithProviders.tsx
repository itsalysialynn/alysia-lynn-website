import { render } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import darkTheme from '../ui/themes/darkTheme';
import lightTheme from '../ui/themes/lightTheme';

const renderWithProviders = (component: ReactElement, theme?: typeof darkTheme) =>
  render(<ThemeProvider theme={theme ?? lightTheme}>{component}</ThemeProvider>);

export default renderWithProviders;
