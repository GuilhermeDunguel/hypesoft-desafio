import styled from 'styled-components'

export const Main = styled.main`

  margin-left: 300px;

  @media (max-width: 1680px) {
    margin-left: 150px;
  }

  @media (max-width: 1440px) {
    margin-left: 100px;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: right;

  nav {
    background-color: ${props => props.theme.purple500};
    width: 40%;
    display: flex;
    gap: 1.75rem;

    padding: 1.75rem 2.9375rem;
  
    a {
      color: ${props => props.theme.gray50};
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 40px;
      text-decoration: none;

      transition: filter 0.2s;

      &:hover {
        filter: opacity(90%)
      }
    }
  }
`

