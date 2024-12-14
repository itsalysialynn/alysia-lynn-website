import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import Envelope from '../atoms/icons/Envelope';
import Github from '../atoms/icons/Github';
import Linkedin from '../atoms/icons/Linkedin';
import mediaQueries from '../atoms/mediaQueries';
import Theme from '../themes/Theme';

export const NAV_HEIGHT = 64;

type NavbarLayoutProps = {
  isTopOfPage: boolean;
  theme: Theme;
};

const NavbarLayout = styled.nav<NavbarLayoutProps>`
  background-color: ${({ theme, isTopOfPage }) =>
    isTopOfPage ? theme.backgroundColor : theme.nav.backgroundColor};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  height: ${NAV_HEIGHT}px;
  z-index: 1;
  display: grid;
  align-items: center;

  ${mediaQueries.mobile`
    text-align: center;
    grid-template-columns: 5fr 2fr;
    padding: 0 8px;
  `}

  ${mediaQueries.tablet`
    text-align: center;
    grid-template-columns: 5fr 2fr;
    padding: 0 24px;
  `}

  ${mediaQueries.laptop`
    grid-template-columns: 5fr 2fr;
    padding: 0 128px;
  `}

  ${mediaQueries.desktop`
    grid-template-columns: 2fr 1fr;
    padding: 0 144px;
  `}
  
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

  ${mediaQueries.mobile`
    grid-gap: 8px;
  `}

  ${mediaQueries.tablet`
    grid-gap: 16px;
  `}

  ${mediaQueries.laptop`
    grid-gap: 16px;
  `}

  ${mediaQueries.desktop`
    grid-gap: 24px;
  `}
`;

const NavIconOutboundLink = styled(OutboundLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <NavbarLayout isTopOfPage={isTopOfPage}>
      <NavigationItems>
        <AnchorLink title="Employment" to="/#employment">
          Employment
        </AnchorLink>
        <AnchorLink title="Education" to="/#education">
          Education
        </AnchorLink>
        <OutboundLink href="https://medium.com/@itsalysialynn">Blog</OutboundLink>
      </NavigationItems>
      <NavigationIcons>
        <NavIconOutboundLink
          aria-label="GitHub"
          href="https://github.com/itsalysialynn"
          rel="noreferrer"
          target="_blank"
        >
          <Github />
        </NavIconOutboundLink>
        <NavIconOutboundLink
          aria-label="Linkedin"
          href="https://www.linkedin.com/in/itsalysialynn/"
          rel="noreferrer"
          target="_blank"
        >
          <Linkedin />
        </NavIconOutboundLink>
        <NavIconOutboundLink aria-label="Email Me" href="mailto:itsalysialynn@gmail.com">
          <Envelope />
        </NavIconOutboundLink>
      </NavigationIcons>
    </NavbarLayout>
  );
};

export default Navbar;
