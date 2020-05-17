import { createGlobalStyle } from 'styled-components';
import { colors } from '.';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  body, #root {
    max-width: 100%;
    min-height: calc(100vh);
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font: 14px Montserrat-Medium, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: ${colors.black};
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
