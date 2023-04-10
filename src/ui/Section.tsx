import styled from 'styled-components';

import mediaQueries from './constants/mediaQueries';
import Theme from './themes/Theme';

type SectionProps = {
  theme: Theme;
};

const Section = styled.div<SectionProps>`
  border-bottom: 1px solid ${({ theme }) => theme.section.borderColor};
  padding: 32px 0;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 4fr;

  ${mediaQueries.mobile`
    grid-template-columns: 1fr;
  `}
`;

export default Section;
