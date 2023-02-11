import styled from 'styled-components';

export const CompaniesIveWorkedContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${props => props.theme.gray50};
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.5rem;
    max-width: 20rem;

    span {
      position: relative;
      
      color: ${props => props.theme.pink500};
      
      &::after {
        position: absolute;
        left: -0.2rem;
        bottom: -0.2rem;

        content: '';
        max-width: 5.5rem;
        max-height: 1.25rem;;
        width: 100%;
        height: 100%;

        background-color: ${props => props.theme.purple500};

        filter: opacity(15%);
      }
    }
  }
`

export const LogosContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const LogosWrapper = styled.div`
  box-sizing: content-box;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 10.5rem;
  min-height: 7.5rem;
  
  padding: 0.3125rem 0.5rem;
  color: ${props => props.theme.pink500};
  
  border-radius: 8px;

  background-color: ${props => props.theme.gray50};

  filter: brightness(95%);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(100%);
  }

  img {
    object-fit: cover;
  }

  a {
    position: absolute;
    inset: 0;
  }
`