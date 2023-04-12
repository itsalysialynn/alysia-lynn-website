import React, { ReactNode, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { NAV_HEIGHT } from '../components/Navbar';

import { mediaQueries } from './constants/mediaQueries';
import Theme from './themes/Theme';

type CardLayoutProps = {
  theme: Theme;
};

const CardLayout = styled.div<CardLayoutProps>`
  background-color: ${({ theme }: CardLayoutProps) => theme.card.backgroundColor};
  border-radius: 4px;
  display: grid;
  grid-gap: 8px;
  padding: 24px;

  @media ${mediaQueries.mobile} {
    padding: 16px;
  }

  @media ${mediaQueries.tablet} {
    padding: 24px;
  }
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
  id: string;
  yearRange: string;
};

const Card = ({ children, header, yearRange, id }: CardProps) => {
  const handleFadeOut = useCallback(() => {
    const element = document.getElementById(id);
    if (element) {
      const distanceToTop = window.pageYOffset + element.getBoundingClientRect().top - NAV_HEIGHT;
      const elementHeight = element.offsetHeight;
      const { scrollTop } = document.documentElement;

      let opacity = 1;

      if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
      }

      if (opacity >= 0) {
        element.style.opacity = opacity.toString();
      }
    }
  }, [id]);

  useEffect(() => {
    window.addEventListener('scroll', handleFadeOut);

    return () => {
      window.removeEventListener('scroll', handleFadeOut);
    };
  }, [handleFadeOut]);

  return (
    <CardLayout id={id}>
      <CardHeaderLayout>
        <h4>{header}</h4>
        <CardYearRange>{yearRange}</CardYearRange>
      </CardHeaderLayout>
      {children}
    </CardLayout>
  );
};

export default Card;
