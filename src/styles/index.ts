import styled from 'styled-components'

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
      line-height: 2.5rem;
      text-decoration: none;

      transition: filter 0.2s;

      &:hover {
        filter: opacity(90%)
      }
    }
  }
`

export const Main = styled.main``

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  max-width: 82.5rem;
  margin: 13.75rem auto 10rem;

  img {
    width: 15.8125rem;
    height: 3.6875rem;
  }

  span {
    color: ${props => props.theme.gray500};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;

    .CreditsHeart {
      color: ${props => props.theme.pink500};
    }

    strong {
      color: ${props => props.theme.purple500};
      font-weight: 600;
    }
  }
`
