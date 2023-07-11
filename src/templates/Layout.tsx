import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import useTheme from '../hooks/useTheme';
import GlobalStyle from '../ui/atoms/GlobalStyle';
import mediaQueries from '../ui/atoms/mediaQueries';
import Footer from '../ui/organisms/Footer';
import Navbar, { NAV_HEIGHT } from '../ui/organisms/Navbar';
import darkTheme from '../ui/themes/darkTheme';
import lightTheme from '../ui/themes/lightTheme';

const PageLayout = styled.div`
  ${mediaQueries.mobile`
    padding: 0 8px;
  `}

  ${mediaQueries.tablet`
    padding: 0 24px;
  `}

  ${mediaQueries.laptop`
    padding: 0 96px;
  `}

  ${mediaQueries.desktop`
    padding: 0 144px;
  `}
`;

const PageWrapper = styled.div`
  margin-top: ${NAV_HEIGHT}px;
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <PageWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <PageLayout>
          <Navbar />
          <main role="main">{children}</main>
          <Footer />
        </PageLayout>
      </ThemeProvider>
    </PageWrapper>
  );
};

export default Layout;
