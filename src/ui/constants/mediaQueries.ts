import { css, CSSObject } from 'styled-components';

const breakpoints = {
  desktopMinWidth: 801,
  mobileMaxWidth: 800,
};

const mediaQueries = {
  desktop: (...args: CSSObject[] | TemplateStringsArray[]) => css`
    @media (min-width: ${breakpoints.desktopMinWidth}px) {
      ${args}
    }
  `,
  mobile: (...args: CSSObject[] | TemplateStringsArray[]) => css`
    @media (max-width: ${breakpoints.mobileMaxWidth}px) {
      ${args}
    }
  `,
};

export default mediaQueries;
