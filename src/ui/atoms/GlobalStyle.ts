import { createGlobalStyle } from 'styled-components';

import Theme from '../themes/Theme';

import mediaQueries from './mediaQueries';

type GlobalStyleProps = {
  theme: Theme;
};

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-repeat: no-repeat;
    font-family: Inter, sans-serif;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }: GlobalStyleProps) => theme.backgroundColor};
    color: ${({ theme }: GlobalStyleProps) => theme.color};
    font-size: 1rem;
    margin: 0;

    h1 {
      font-size: 5rem;
      letter-spacing: -.02em;
      font-weight: 800;
      margin: 0;

      ${mediaQueries.mobile`
        font-size: 2.75rem;
        font-weight: 800;
      `}

      ${mediaQueries.tablet`
        font-size: 4rem;
        font-weight: 800;
      `}
    }

    h2 {
      font-size: 3rem;
      margin: 0;
      font-weight: 700;

      ${mediaQueries.mobile`
        font-size: 2rem;
      `}

      ${mediaQueries.tablet`
        font-size: 2.5rem;
      `}
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
    }

    h4 {
      font-weight: bold;
      font-size: 1rem;
      margin: 0;
    }

    p {
      margin: 0;
    }

    a {
      color: ${({ theme }: GlobalStyleProps) => theme.hyperlink.color};
      text-decoration: none;

      &.hover, &.active  {
        opacity: .75;
      }
    }

    ul {
      list-style-type: "- ";
      padding: 0;
      margin: 0 8px;
    }

    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export default GlobalStyle;
