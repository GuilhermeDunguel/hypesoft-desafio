import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    background-color: #242424;
    color: #fff;
  }

  html {
    @media (max-width: 1680px) {
      font-size: 85%;
    }

    @media (max-width: 1300px) {
      font-size: 80%;
    }
  }
`