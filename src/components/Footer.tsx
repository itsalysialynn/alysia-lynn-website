import React from 'react';
import styled from 'styled-components';

const FooterLayout = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding-top: 24px;
`;

const Footer = () => (
  <FooterLayout>
    <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
  </FooterLayout>
);

export default Footer;
