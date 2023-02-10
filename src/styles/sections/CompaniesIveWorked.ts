import styled from 'styled-components';

export const CompaniesIveWorkedContainer = styled.section`
  max-width: 82.5rem;
  margin: 220px auto 0;

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
        max-height: 20px;;
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
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 10.5rem;
  min-height: 7.5rem;
  
  padding: 5px 8px;
  color: ${props => props.theme.pink500};
  
  border-radius: 8px;

  background-color: ${props => props.theme.gray50};

  img {
    

    object-fit: cover;
  }

  a {
    position: absolute;
    inset: 0;
  }
`