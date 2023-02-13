import styled from 'styled-components'

export const MainSectionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 13.75rem;

  height: 100%;
  max-width: 83.5rem;

  margin: 8.25rem auto 0;

  @media (max-width: 1200px) {
    margin: 32rem auto 0;
    padding: 0 1.25rem;
  }
`

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
