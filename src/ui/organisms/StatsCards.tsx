import React from 'react';
import CountUp from 'react-countup';
import { styled } from 'styled-components';
import colors from '../atoms/colors';
import fadeInUpAnimation from '../atoms/fadeInUpAnimation';
import mediaQueries from '../atoms/mediaQueries';
import Theme from '../themes/Theme';

const CounterNumber = styled.h1`
  color: ${colors.king};
`;

type CardProps = {
  theme: Theme;
};

const Card = styled.div<CardProps>`
  background-color: ${({ theme }: CardProps) => theme.card.backgroundColor};
  border-radius: 4px;
  display: flex;
  align-items: center;
  grid-gap: 16px;
  padding: 16px;

  ${mediaQueries.mobile`
    grid-gap: 8px;
  `}
`;

const StatsWrapper = styled.div`
  animation-name: ${fadeInUpAnimation};
  animation-duration: 1s;
  animation-iteration-count: 1;
`;

const StatsLayout = styled.div`
  display: grid;
  grid-gap: 8px;

  ${mediaQueries.mobile`
    grid-template-columns: 1fr;
  `}

  ${mediaQueries.tablet`
    grid-template-columns: 1fr;
  `} 
  
  ${mediaQueries.laptop`
    grid-template-columns: 1fr 1fr;
  `} 
  
  ${mediaQueries.desktop`
    grid-template-columns: 1fr 1fr 1fr;
  `};
`;

const StatsCards = () => (
  <StatsWrapper>
    <StatsLayout>
      <Card>
        <CounterNumber>
          <CountUp delay={1.2} end={new Date().getFullYear() - 2017} start={0} />
        </CounterNumber>
        Years of Dev Experience
      </Card>
      <Card>
        <CounterNumber>
          <CountUp delay={1.4} end={2317} start={0} />
        </CounterNumber>
        Git Contributions in 2024
      </Card>
      <Card>
        <CounterNumber>
          <CountUp delay={1} end={1} start={0} />
        </CounterNumber>
        Web Dev Bootcamp
      </Card>
    </StatsLayout>
  </StatsWrapper>
);

export default StatsCards;
