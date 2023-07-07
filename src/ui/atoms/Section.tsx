import styled from 'styled-components';

import Theme from '../themes/Theme';

import { mediaQueries } from './mediaQueries';

type SectionProps = {
  theme: Theme;
};

const Section = styled.section<SectionProps>`
  display: grid;
  grid-gap: 24px;

  @media ${mediaQueries.mobile} {
    padding: 84px 16px 16px 16px;
  }

  @media ${mediaQueries.tablet} {
    padding: 84px 32px 32px 32px;
  }

  @media ${mediaQueries.ld} {
    padding: 84px 128px;
  }
`;

export default Section;
