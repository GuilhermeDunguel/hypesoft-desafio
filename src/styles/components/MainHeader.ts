import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: right;

  nav {
    width: 40%;
    display: flex;
    gap: 1.75rem;

    padding: 1.75rem 2.9375rem;

    background-color: ${props => props.theme.purple500};
  
    a {
      color: ${props => props.theme.gray50};
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 2.5rem;
      text-decoration: none;

      transition: filter 0.2s;

      &:hover {
        filter: opacity(90%)
      }
    }

    select {
      color: ${props => props.theme.gray50};
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 2.5rem;

      border: none;
      background-color: ${prosp => prosp.theme.purple500};

      cursor: pointer;
    }
  }

  @media (max-width: 1200px) {
    nav {
      width: 100%;
    }
  }

  
`