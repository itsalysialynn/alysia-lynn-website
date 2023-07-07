import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import AppHelmet from '../AppHelmet';
import useTheme from '../hooks/useTheme';
import GlobalStyle from '../ui/atoms/GlobalStyle';
import mediaQueries from '../ui/atoms/mediaQueries';
import Footer from '../ui/organisms/Footer';
import Navbar, { NAV_HEIGHT } from '../ui/organisms/Navbar';
import darkTheme from '../ui/themes/darkTheme';
import lightTheme from '../ui/themes/lightTheme';

const PageLayout = styled.div`
  ${mediaQueries.mobile`
    padding: 0 16px;
  `}

  ${mediaQueries.tablet`
    padding: 0 24px;
  `}

  ${mediaQueries.laptop`
    padding: 0 128px;
  `}

  ${mediaQueries.desktop`
    padding: 0 160px;
  `}
`;

const PageWrapper = styled.div`
  margin-top: ${NAV_HEIGHT}px;
`;

type LayoutProps = {
  children: ReactNode;
  description?: string | undefined | null;
  robotMetaContent?: string | undefined | null;
  title?: string | undefined | null;
  schemaMarkup?: object;
  author?: string | undefined | null;
};

const Layout = ({
  children,
  description,
  robotMetaContent,
  title,
  schemaMarkup,
  author,
}: LayoutProps) => {
  const { isDarkTheme } = useTheme();
  return (
    <>
      <AppHelmet
        author={author}
        description={description}
        robotMetaContent={robotMetaContent}
        schemaMarkup={schemaMarkup}
        title={title}
      />

      <PageWrapper>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <GlobalStyle />
          <PageLayout>
            <Navbar />
            <main role="main">{children}</main>
            <Footer />
          </PageLayout>
        </ThemeProvider>
      </PageWrapper>
    </>
  );
};

Layout.defaultProps = {
  author: undefined,
  description: undefined,
  robotMetaContent: undefined,
  schemaMarkup: {},
  title: undefined,
};

export default Layout;
