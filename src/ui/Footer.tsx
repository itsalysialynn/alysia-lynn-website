import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from './constants/mediaQueries';
import Theme from './themes/Theme';

const LogoLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoImage = styled.img`
  padding-right: 4px;
`;

const FooterLayout = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 24px;

  @media ${mediaQueries.mobile} {
    padding: 16px;
    flex-direction: column;
    grid-gap: 8px;
  }
  ≥//
  @media ${mediaQueries.tablet} {
    padding: 32px;
  }

  @media ${mediaQueries.ld} {
    padding: 32px 128px;
  }
`;

type SubtleLinkProps = {
  theme: Theme;
};

const Footer = () => (
  <FooterLayout>
    <p>Made with 💜 by Alysia Lynn</p>
    <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
    <LogoLayout>
      <LogoImage
        height={24}
        alt="Trash on fire"
        src="https://www.morganti.dev/images/favicon.gif"
      />
      <p>
        Built on
        <a href="https://www.morganti.dev/"> Mikefrastructure</a>
      </p>
    </LogoLayout>
  </FooterLayout>
);

export default Footer;
