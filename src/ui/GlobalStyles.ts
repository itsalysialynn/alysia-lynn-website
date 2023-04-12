import { createGlobalStyle } from 'styled-components';

import { mediaQueries } from './constants/mediaQueries';
import Theme from './themes/Theme';

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
    font-size: 16px;
    margin: 0;

    h1 {
      font-size: 80px;
      letter-spacing: -.02em;
      font-weight: 800;
      margin: 0;
    }

    h2 {
      font-size: 40px;
      margin: 0;
      font-weight: 700;
      
      @media ${mediaQueries.mobile} {
        font-size: 32px;
      }
    }

    h3 {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }

    h4 {
      font-weight: bold;
      margin: 0;
    }

    p {
      margin: 0;
    }

    main {
      height: 100%;
    }

    a {
      color: ${({ theme }: GlobalStyleProps) => theme.hyperlink.color};
      text-decoration: none;

      &.active {
        color: ${({ theme }: GlobalStyleProps) => theme.hyperlink.active};
      }

      &.hover {
        color: ${({ theme }: GlobalStyleProps) => theme.hyperlink.hover};
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
