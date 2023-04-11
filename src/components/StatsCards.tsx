import React from 'react';
import CountUp from 'react-countup';
import { MotionAnimate } from 'react-motion-animate';
import styled from 'styled-components';

import colors from '../ui/constants/colors';
import { mediaQueries } from '../ui/constants/mediaQueries';
import Theme from '../ui/themes/Theme';

const CounterNumber = styled.h2`
  color: ${colors.sunrise};
  font-size: 56px;
`;

type CardProps = {
  theme: Theme;
};

const Card = styled.div<CardProps>`
  background-color: ${({ theme }: CardProps) => theme.card.backgroundColor};
  border-radius: 4px;
  padding: 24px;
  display: flex;
  align-items: center;
  grid-gap: 8px;

  @media ${mediaQueries.mobile} {
    grid-gap: 16px;
  }

  @media ${mediaQueries.tablet} {
    grid-gap: 16px;
  }
`;

const StatsLayout = styled.div`
  display: grid;
  grid-gap: 8px;

  @media ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
  }

  @media ${mediaQueries.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mediaQueries.ld} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const StatsCards = () => (
  <MotionAnimate animation="fadeInUp" delay={1} distance={100} reset={false} speed={2}>
    <StatsLayout>
      <Card>
        <CounterNumber>
          <CountUp delay={2} end={1} start={0} />
        </CounterNumber>
        Web Development Bootcamp
      </Card>
      <Card>
        <CounterNumber>
          <CountUp delay={2} end={new Date().getFullYear() - 2017} start={0} />
        </CounterNumber>
        Years of Development Experience
      </Card>
      <Card>
        <CounterNumber>
          <CountUp delay={2} end={9} start={0} />
        </CounterNumber>
        Udemy Courses Complete
      </Card>
      <Card>
        <CounterNumber>
          <CountUp delay={2} end={4} start={0} />
        </CounterNumber>
        Dev Books Read in 2023
      </Card>
    </StatsLayout>
  </MotionAnimate>
);

export default StatsCards;
