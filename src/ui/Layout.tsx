import React, { ReactNode } from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import styled, { ThemeProvider } from 'styled-components';

import useTheme from '../hooks/useTheme';
import GlobalStyles from './GlobalStyles';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';

import Footer from './Footer';
import Navbar, { NAV_HEIGHT } from './Navbar';

const PageWrapper = styled.div`
  padding-top: ${NAV_HEIGHT}px;
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
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </PageWrapper>
  );
};

Layout.defaultProps = {
  nofollow: false,
};

export default Layout;
