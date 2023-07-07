import React from 'react';
import styled from 'styled-components';

import factsAboutMe from '../../data/factsAboutMe';
import colors from '../atoms/colors';
import fadeInUpAnimation from '../atoms/fadeInUpAnimation';
import mediaQueries from '../atoms/mediaQueries';
import Section from '../atoms/Section';
import TextLoop from '../atoms/TextLoop';

import StatsCards from './StatsCards';

const AboutMeSectionDesktopLayout = styled(Section)`
  min-height: 100vh;
  ${mediaQueries.tablet`
    padding: 15vh 0;
  `}
  ${mediaQueries.laptop`
    padding: 15vh 0;
  `} ${mediaQueries.desktop`
    padding: 25vh 0;
  `};
`;

const IntroText = styled.h1`
  display: inline;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
  animation-name: ${fadeInUpAnimation};
  animation-duration: 4s;
  animation-iteration-count: 1;
  white-space: break-spaces;
  background-image: linear-gradient(
    100deg,
    #dc90ff,
    #ad77ff 9%,
    #6851ff 40%,
    #6851ff 46%,
    #6851ff 55%,
    #7cbfff 82%,
    ${colors.grape}
  );
`;

const IntroTextLoop = styled.h2`
  display: inline;
`;

const AboutMeSection = () => (
  <AboutMeSectionDesktopLayout id="about">
    <div>
      <IntroText>Hi, I'm Alysia Lynn, </IntroText>
      <IntroTextLoop>
        and I <TextLoop textArray={factsAboutMe} />
      </IntroTextLoop>
    </div>
    <StatsCards />
  </AboutMeSectionDesktopLayout>
);

export default AboutMeSection;
