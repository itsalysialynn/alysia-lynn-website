import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import useTheme from '../hooks/useTheme';
import mediaQueries from '../ui/constants/mediaQueries';
import Theme from '../ui/themes/Theme';

export const NAV_HEIGHT = 112;

type NavbarLayoutProps = {
  theme: Theme;
};

const NavbarLayout = styled.nav`
  background-color: ${({ theme }: NavbarLayoutProps) => theme.nav.backgroundColor};
  left: 0;
  padding: 24px 48px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  ${mediaQueries.mobile`
    text-align: center;
  `}
`;

const Navbar = () => {
  const { isDarkTheme } = useTheme();

  return (
    <NavbarLayout>
      {isDarkTheme ? (
        <StaticImage alt="Alysia Lynn White Logo" height={64} src="../images/white-logo.png" />
      ) : (
        <StaticImage alt="Alysia Lynn Black Logo" height={64} src="../images/black-logo.png" />
      )}
    </NavbarLayout>
  );
};

export default Navbar;
