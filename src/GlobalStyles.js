// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {  
    --primary-color:  #02060F;
    --secondary-color: #00B4C5;
    --text-color: #FFF;
}

  body, html {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    scroll-behavior: smooth;
    
    scroll-snap-type: y mandatory;
  }

  section {
    height: 100vh; 
    scroll-snap-align: start;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
`;
