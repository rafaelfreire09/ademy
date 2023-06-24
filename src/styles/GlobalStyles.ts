import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: none;
    border: 0;
    user-select: none;
    scroll-behavior: smooth;
    box-sizing: border-box;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  html, body, #__next {
    height: 100%;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
