import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from '../ui/constants/mediaQueries';

const FooterLayout = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 24px;

  @media ${mediaQueries.mobile} {
    padding: 32px;
  }

  @media ${mediaQueries.tablet} {
    padding: 32px;
  }

  @media ${mediaQueries.ld} {
    padding: 32px 128px;
  }
`;

const Footer = () => (
  <FooterLayout>
    <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
    <p>Made with 💜 by Alysia Lynn</p>
  </FooterLayout>
);

export default Footer;
