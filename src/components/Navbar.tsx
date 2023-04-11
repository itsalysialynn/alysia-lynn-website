import React, { useEffect, useState } from 'react';
import { FaEnvelope,FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
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
    grid-template-columns: 1fr 1fr;
    padding: 0 32px;
  }

  @media ${mediaQueries.ld} {
    grid-template-columns: 1fr 1fr;
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

const NavigationIcons = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 24px;
  align-items: center;
  justify-content: flex-end;
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
        <AnchorLink title="Employment" to="#employment">
          Employment History
        </AnchorLink>
        <AnchorLink title="Education" to="#education">
          Education
        </AnchorLink>
      </NavigationItems>
      <NavigationIcons>
        <OutboundLink
          aria-label="GitHub"
          href="https://github.com/itsalysialynn"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithubAlt size={20} />
        </OutboundLink>
        <OutboundLink
          aria-label="Linkedin"
          href="https://www.linkedin.com/in/itsalysialynn/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedinIn size={20} />
        </OutboundLink>
        <a aria-label="Email Me" href="mailto:itsalysialynn@gmail.com">
          <FaEnvelope size={20} />
        </a>
      </NavigationIcons>
    </NavbarLayout>
  );
};

export default Navbar;
