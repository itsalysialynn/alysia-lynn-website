import React from 'react';
import styled from 'styled-components';

import mediaQueries from '../atoms/mediaQueries';

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
  padding: 16px 0;

  ${mediaQueries.mobile`
    flex-direction: column;
  `}

  ${mediaQueries.tablet`
    flex-direction: column;
  `}
`;
const Footer = () => (
  <FooterLayout>
    <p>Made with 💜 by Alysia Lynn</p>
    <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
    <LogoLayout>
      <LogoImage
        alt="Trash on fire"
        height={24}
        src="https://www.morganti.dev/images/favicon.gif"
        width={24}
      />
      <p>
        Built on
        <a href="https://www.morganti.dev/"> Mikefrastructure</a>
      </p>
    </LogoLayout>
  </FooterLayout>
);

export default Footer;
