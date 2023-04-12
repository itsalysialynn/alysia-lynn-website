import React from 'react';
import { MotionAnimate } from 'react-motion-animate';
import TextLoop from 'react-text-loop';
import styled from 'styled-components';

import factsAboutMe from '../data/factsAboutMe';
import colors from '../ui/constants/colors';
import { mediaQueries } from '../ui/constants/mediaQueries';
import Section from '../ui/Section';

import StatsCards from './StatsCards';

const AboutMeSectionDesktopLayout = styled(Section)`
  @media ${mediaQueries.mobile} {
    height: 60vh;
    padding: 15vh 16px;
  }

  @media ${mediaQueries.tablet} {
    height: 100vh;
    padding: 25vh 32px;
  }

  @media ${mediaQueries.ld} {
    height: 100vh;
    padding: 25vh 128px;
  }
`;

const IntroText = styled.h1`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
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

  @media ${mediaQueries.mobile} {
    font-size: 36px;
    font-weight: bold;
  }

  @media ${mediaQueries.tablet} {
    font-size: 64px;
    font-weight: 600;
  }

  @media ${mediaQueries.ld} {
    font-size: 80px;
    font-weight: 800;
  }
`;

const IntroTextLoop = styled.h2`
  @media ${mediaQueries.mobile} {
    font-size: 16px;
    font-weight: bold;
  }

  @media ${mediaQueries.tablet} {
    font-size: 32px;
    font-weight: 600;
  }

  @media ${mediaQueries.ld} {
    font-size: 40px;
    font-weight: 700;
  }
`;

const AboutMeSection = () => (
  <AboutMeSectionDesktopLayout id="about">
    <MotionAnimate animation="fadeInUp" delay={0.5} distance={100} reset speed={1}>
      <IntroText>Hi, I'm Alysia Lynn,</IntroText>
      <IntroTextLoop>
        and I <TextLoop children={factsAboutMe} />
      </IntroTextLoop>
    </MotionAnimate>
    <StatsCards />
  </AboutMeSectionDesktopLayout>
);

export default AboutMeSection;
