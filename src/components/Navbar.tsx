import React, { useEffect, useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styled from 'styled-components';

import { mediaQueries } from '../ui/constants/mediaQueries';
import Theme from '../ui/themes/Theme';

export const NAV_HEIGHT = 64;

type NavbarLayoutProps = {
  isTopOfPage: boolean;
  theme: Theme;
};

const NavbarLayout = styled.nav`
  background-color: ${({ theme, isTopOfPage }: NavbarLayoutProps) =>
    isTopOfPage ? theme.backgroundColor : theme.nav.backgroundColor};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  height: ${NAV_HEIGHT}px;
  z-index: 1;
  display: grid;

  @media ${mediaQueries.mobile} {
    text-align: center;
    grid-template-columns: 1fr;
    padding: 0 32px;
  }

  @media ${mediaQueries.tablet} {
    text-align: center;
    grid-template-columns: 1fr;
    padding: 0 32px;
  }

  @media ${mediaQueries.ld} {
    grid-template-columns: 2fr 3fr;
    padding: 0 128px;
  }
  

  } a {
    color: ${({ theme }: NavbarLayoutProps) => theme.nav.hyperlink.color};

    &:hover {
      color: ${({ theme }: NavbarLayoutProps) => theme.nav.hyperlink.hover};
    }
  }
`;

const NavigationItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsTopOfPage(window.scrollY === 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <NavbarLayout isTopOfPage={isTopOfPage}>
      <NavigationItems>
        <AnchorLink title="About" to="#about">
          About
        </AnchorLink>
        <AnchorLink title="About" to="#employment">
          Employment History
        </AnchorLink>
        <AnchorLink title="About" to="#education">
          Education
        </AnchorLink>
      </NavigationItems>
    </NavbarLayout>
  );
};

export default Navbar;
