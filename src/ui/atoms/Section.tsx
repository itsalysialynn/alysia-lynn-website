import { styled } from 'styled-components';

import Theme from '../themes/Theme';

type SectionProps = {
  theme: Theme;
};

const Section = styled.section<SectionProps>`
  display: grid;
  grid-gap: 24px;
  padding: 24px 0;
`;

export default Section;
