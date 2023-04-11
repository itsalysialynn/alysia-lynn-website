import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
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
  align-items: center;

  @media ${mediaQueries.mobile} {
    text-align: center;
    grid-template-columns: 5fr 2fr;
    padding: 0 32px;
  }

  @media ${mediaQueries.tablet} {
    text-align: center;
    grid-template-columns: 5fr 2fr;
    padding: 0 32px;
  }

  @media ${mediaQueries.ld} {
    grid-template-columns: 2fr 1fr;
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
  align-items: center;
  justify-content: flex-end;

  @media ${mediaQueries.mobile} {
    grid-gap: 8px;
  }

  @media ${mediaQueries.tablet} {
    grid-gap: 16px;
  }

  @media ${mediaQueries.ld} {
    grid-gap: 24px;
  }
`;

const NavIconOutboundLink = styled(OutboundLink)`
  display: flex;
  justify-content: center;
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
        <AnchorLink title="Employment" to="#employment">
          Employment History
        </AnchorLink>
        <AnchorLink title="Education" to="#education">
          Education
        </AnchorLink>
      </NavigationItems>
      <NavigationIcons>
        <NavIconOutboundLink
          aria-label="GitHub"
          href="https://github.com/itsalysialynn"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithubAlt size={20} />
        </NavIconOutboundLink>
        <NavIconOutboundLink
          aria-label="Linkedin"
          href="https://www.linkedin.com/in/itsalysialynn/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedinIn size={20} />
        </NavIconOutboundLink>
        <NavIconOutboundLink href="mailto:itsalysialynn@gmail.com" aria-label="Email Me">
          <FaEnvelope size={20} />
        </NavIconOutboundLink>
      </NavigationIcons>
    </NavbarLayout>
  );
};

export default Navbar;
