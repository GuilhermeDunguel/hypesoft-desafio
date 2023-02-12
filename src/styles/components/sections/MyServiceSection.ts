import styled from 'styled-components';

export const MyServiceSectionContainer = styled.section`
  display: flex;
  align-items: center;

  flex-direction: column;

  display: flex;
  align-items: center; 
  justify-content: center;
  gap: 3.125rem;
`

export const MyServiceCardsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
  }
`