import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'JetBrains Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-family: 'JetBrains Mono', monospace; /* Add your custom font */
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  .App {
    overflow-x: hidden;
  }
`;
