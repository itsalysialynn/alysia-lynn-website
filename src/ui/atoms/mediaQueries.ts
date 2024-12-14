import { css } from 'styled-components';
import breakpoints from './breakpoints';

const mediaQueries = {
  desktop: (...args: TemplateStringsArray[]) => css`
    @media (min-width: ${breakpoints.laptop + 1}px) {
      ${args}
    }
  `,
  laptop: (...args: TemplateStringsArray[]) => css`
    @media (min-width: ${breakpoints.tablet + 1}px) and (max-width: ${breakpoints.laptop}px) {
      ${args}
    }
  `,
  mobile: (...args: TemplateStringsArray[]) => css`
    @media (max-width: ${breakpoints.mobile}px) {
      ${args}
    }
  `,
  tablet: (...args: TemplateStringsArray[]) => css`
    @media (min-width: ${breakpoints.mobile + 1}px) and (max-width: ${breakpoints.tablet}px) {
      ${args}
    }
  `,
};

export default mediaQueries;
