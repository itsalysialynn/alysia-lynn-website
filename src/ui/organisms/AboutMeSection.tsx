import React from 'react';
import { styled } from 'styled-components';
import factsAboutMe from '../../data/factsAboutMe';
import colors from '../atoms/colors';
import fadeInUpAnimation from '../atoms/fadeInUpAnimation';
import mediaQueries from '../atoms/mediaQueries';
import Section from '../atoms/Section';
import TextLoop from '../atoms/TextLoop';
import StatsCards from './StatsCards';

const AboutMeSectionDesktopLayout = styled(Section)`
  min-height: 100vh;
  ${mediaQueries.mobile`
    text-align: center;
  `}
  ${mediaQueries.tablet`
    padding: 15vh 0;
    text-align: center;
  `}
  ${mediaQueries.laptop`
    padding: 15vh 0;
  `} 
  ${mediaQueries.desktop`
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
    ${colors.sunrise},
    ${colors.lavender} 9%,
    ${colors.king} 40%,
    ${colors.king} 46%,
    ${colors.king} 55%,
    ${colors.whale} 82%,
    ${colors.grape}
  );
`;

const IntroTextLoop = styled.h2`
  display: inline;
`;

const AboutMeSection = () => (
  <AboutMeSectionDesktopLayout id="about">
    <div>
      <IntroText>Hi, I&apos;m Alysia Lynn, </IntroText>
      <IntroTextLoop>
        and I <TextLoop textArray={factsAboutMe} />
      </IntroTextLoop>
    </div>
    <StatsCards />
  </AboutMeSectionDesktopLayout>
);

export default AboutMeSection;
