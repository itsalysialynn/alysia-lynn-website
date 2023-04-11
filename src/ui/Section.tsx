import styled from 'styled-components';

import { mediaQueries } from './constants/mediaQueries';
import Theme from './themes/Theme';

type SectionProps = {
  theme: Theme;
};

const Section = styled.section<SectionProps>`
  display: grid;
  grid-gap: 24px;

  @media ${mediaQueries.mobile} {
    padding: 84px 32px 32px 32px;
  }

  @media ${mediaQueries.tablet} {
    padding: 84px 32px 32px 32px;
  }

  @media ${mediaQueries.ld} {
    padding: 84px 128px;
  }
`;

export default Section;
