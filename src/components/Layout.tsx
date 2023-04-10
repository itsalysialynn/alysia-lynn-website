import React, { ReactNode } from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import styled, { ThemeProvider } from 'styled-components';

import useTheme from '../hooks/useTheme';
import GlobalStyles from '../ui/GlobalStyles';
import darkTheme from '../ui/themes/darkTheme';
import lightTheme from '../ui/themes/lightTheme';

import Footer from './Footer';
import Navbar from './Navbar';

const PageWrapper = styled.div`
  padding: 112px 48px 24px 48px;
`;

const PageLayout = styled.main`
  display: grid;
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
        <PageLayout>{children}</PageLayout>
        <Footer />
      </ThemeProvider>
    </PageWrapper>
  );
};

Layout.defaultProps = {
  nofollow: false,
};

export default Layout;
