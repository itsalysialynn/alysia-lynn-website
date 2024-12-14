import { styled } from 'styled-components';

import TrashFireLazy from '../atoms/gifs/trash-fire/TrashFireLazy';
import mediaQueries from '../atoms/mediaQueries';
import ExternalLink from '../molecules/ExternalLink';

const LogoLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoImage = styled(TrashFireLazy)`
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
      <LogoImage />
      <span>
        Built on&nbsp;
        <ExternalLink href="https://www.morganti.dev/" text="Mikefrastructure" />
      </span>
    </LogoLayout>
  </FooterLayout>
);

export default Footer;
