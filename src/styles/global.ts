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
    scroll-behavior: smooth;
    @media (max-width: 1680px) {
      font-size: 85%;
    }

    @media (max-width: 1300px) {
      font-size: 75%;
    }

    @media (max-width: 1300px) {
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #ED1CA6;
    &:hover {
      background: #ED3CB1;
    }
  }
`