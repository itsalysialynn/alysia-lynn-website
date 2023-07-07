import React from 'react';
import CountUp from 'react-countup';
import { MotionAnimate } from 'react-motion-animate';
import styled from 'styled-components';

import colors from '../ui/atoms/colors';
import { mediaQueries } from '../ui/atoms/mediaQueries';
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
  display: flex;
  align-items: center;
  grid-gap: 8px;

  @media ${mediaQueries.mobile} {
    grid-gap: 8px;
    padding: 16px;
  }

  @media ${mediaQueries.tablet} {
    grid-gap: 16px;
    padding: 24px;
  }
`;

const StatsLayout = styled.div`
  display: grid;
  grid-gap: 8px;

  @media ${mediaQueries.mobile} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mediaQueries.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mediaQueries.ld} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const StatsCards = () => (
  <MotionAnimate animation="fadeInUp" delay={1} distance={100} reset speed={2}>
    <StatsLayout>
      <Card>
        <CounterNumber>
          <CountUp delay={2.2} end={new Date().getFullYear() - 2017} start={0} />
        </CounterNumber>
        Years of Dev Experience
      </Card>
      <Card>
        <CounterNumber>
          <CountUp delay={2.4} end={10} start={0} />
        </CounterNumber>
        Udemy Courses Complete
      </Card>
      <Card>
        <CounterNumber>
          <CountUp delay={2.6} end={4} start={0} />
        </CounterNumber>
        Dev Books Read in 2023
      </Card>
      <Card>
        <CounterNumber>
          <CountUp delay={2} end={1} start={0} />
        </CounterNumber>
        Web Dev Bootcamp
      </Card>
    </StatsLayout>
  </MotionAnimate>
);

export default StatsCards;
