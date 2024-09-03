import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(45deg, #1c1c1e, #121212);
    color: #E0E0E0;
    font-family: Arial, sans-serif;
  }
`;

export default GlobalStyle;