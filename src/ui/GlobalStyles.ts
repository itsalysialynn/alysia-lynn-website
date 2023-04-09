import { createGlobalStyle } from 'styled-components';
import colors from './constants/colors';
import { Theme } from './themes/types';

type GlobalStyleProps = {
  theme: Theme;
};

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-repeat: no-repeat;
    font-family: 'Barlow', sans-serif;
  }

  body {
    background-color: ${({ theme }: GlobalStyleProps) => theme.backgroundColor};
    color: ${({ theme }: GlobalStyleProps) => theme.color};
    font-size: 16px;
    margin: 0;

    h1 {
      font-size: 48px;
      font-weight: 700;
      margin: 0;
      text-transform: uppercase;
    }

    h2 {
      font-size: 32px;
      font-weight: normal;
      margin: 0;
      font-weight: bold;
      text-transform: uppercase;
    }

    h3 {
      font-size: 24px;
      font-weight: normal;
      margin: 0;
      text-transform: uppercase;
    }

    h4 {
      font-size: 16px;
      font-weight: 500;
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
