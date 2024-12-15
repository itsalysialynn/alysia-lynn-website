import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import Theme from '../themes/Theme';
import mediaQueries from './mediaQueries';

type CardLayoutProps = {
  theme: Theme;
};

const CardLayout = styled.div<CardLayoutProps>`
  background-color: ${({ theme }: CardLayoutProps) => theme.card.backgroundColor};
  border-radius: 4px;
  display: grid;
  grid-gap: 8px;
  padding: 24px;

  ${mediaQueries.mobile`
    padding: 16px;
  `}
`;

const CardHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardYearRange = styled.div`
  flex: 0 0 auto;
  padding-left: 4px;
`;

type CardProps = {
  children: ReactNode;
  header: string;
  yearRange: string;
};

const Card = ({ children, header, yearRange }: CardProps) => (
  <CardLayout>
    <CardHeaderLayout>
      <h3>{header}</h3>
      <CardYearRange>{yearRange}</CardYearRange>
    </CardHeaderLayout>
    {children}
  </CardLayout>
);

export default Card;
