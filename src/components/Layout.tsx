import React, { ReactNode } from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import styled, { ThemeProvider } from 'styled-components';

import useTheme from '../hooks/useTheme';
import GlobalStyles from '../ui/GlobalStyles';
import darkTheme from '../ui/themes/darkTheme';
import lightTheme from '../ui/themes/lightTheme';

const PageWrapper = styled.div`
  padding: 24px 48px;
`;

type LayoutProps = {
  children: ReactNode;
  description: string;
  nofollow?: boolean;
  title: string;
};

const Layout = ({ children, description, nofollow, title }: LayoutProps) => {
  const { isDarkTheme } = useTheme();

  return (
    <PageWrapper>
      <GatsbySeo description={description} nofollow={nofollow} title={title} />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </PageWrapper>
  );
};

Layout.defaultProps = {
  nofollow: false,
};

export default Layout;
