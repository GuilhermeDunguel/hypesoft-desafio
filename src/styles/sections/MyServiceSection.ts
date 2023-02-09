import styled from 'styled-components';

export const MyServiceSectionContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  /* max-width: 82.5rem; */

  margin: 220px auto 0;

  display: flex;
  align-items: center; 
  justify-content: center;
  gap: 3.125rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 3rem;
    position: relative;

    &::after {
      position: absolute;
      bottom: -16px;
      left: calc(50% - (5rem / 2));

      content: '';
      width: 5rem;
      height: 0.1875rem;
      border-radius: 3px;
      background-color: ${props => props.theme.pink500};
    }
  }

`

export const MyServiceCardsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`